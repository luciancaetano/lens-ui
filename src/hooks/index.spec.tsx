import { useContext } from 'react';
import { renderHook, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { clear as clearUserAgent, mockUserAgent } from 'jest-useragent-mock';
import {
  useAlert, useDevice, useProgressiveTimeout, useToast,
} from '.';

jest.mock('react', () => ({
  ...jest.requireActual('react') as any,
  useContext: jest.fn(),
}));

const useContextFn = useContext as jest.Mock<any, any>;

describe('src/hooks', () => {
  beforeEach(() => {
    useContextFn.mockClear();
    clearUserAgent();
  });

  it('useAlert', async () => {
    const context = {
      addAlert: jest.fn(),
      cancelAlert: jest.fn(),
      clearQueue: jest.fn(),
      clearResults: jest.fn(),
      activeAlert: null,
      queue: [],
      results: {},
    };

    useContextFn.mockReturnValueOnce(context);

    const { result: { current } } = renderHook(() => useAlert());

    expect(current).toMatchObject({});

    act(() => {
      current.alert({ title: 'title' });
      current.cancelAlert();
    });

    expect(context.addAlert).toHaveBeenCalled();
    expect(context.cancelAlert).toHaveBeenCalled();
  });

  it('useDevice', async () => {
    const context = {
      orientation: 'landscape',
      online: true,
      windowSize: {
        width: 1920,
        height: 1080,
      },
    };

    useContextFn.mockReturnValueOnce(context);

    const { result: { current } } = renderHook(() => useDevice());

    expect(current).toMatchObject({
      orientation: context.orientation,
      cordova: false, // support cordova instance checking
      online: true,
      isPhone: false,
      isTablet: false,
      isDesktop: true,
      windowSize: context.windowSize,
    });
  });

  it('useDevice android', async () => {
    const context = {
      orientation: 'landscape',
      online: true,
      windowSize: {
        width: 1920,
        height: 1080,
      },
    };

    mockUserAgent('Android');

    useContextFn.mockReturnValueOnce(context);

    const { result: { current } } = renderHook(() => useDevice());

    expect(current.os).toBe('android');
  });

  it('useDevice ios', async () => {
    const context = {
      orientation: 'landscape',
      online: true,
      windowSize: {
        width: 1920,
        height: 1080,
      },
    };

    mockUserAgent('iPhone');

    useContextFn.mockReturnValueOnce(context);

    const { result: { current } } = renderHook(() => useDevice());

    expect(current.os).toBe('ios');
  });

  it('useToast', async () => {
    const context = {
      add: jest.fn(), close: jest.fn(), closeAll: jest.fn(), toasts: [],
    };

    useContextFn.mockReturnValueOnce(context);

    const { result: { current } } = renderHook(() => useToast());

    act(() => {
      current.addToast({} as any, '123');
      current.clearToasts();
      current.removeToast('123');
    });

    expect(context.add).toHaveBeenCalled();
    expect(context.closeAll).toHaveBeenCalled();
    expect(context.close).toHaveBeenCalled();
  });

  it('useProgressiveTimeout', async () => {
    const onProgress = jest.fn();
    const onComplete = jest.fn();

    jest.useFakeTimers();

    const { result: { current: [start,, inProgress] } } = renderHook(() => useProgressiveTimeout(onProgress, onComplete, 100));

    expect(inProgress.current).toBe(false);

    start(30000);

    jest.advanceTimersByTime(1000);

    expect(inProgress.current).toBe(true);
    expect(onProgress).toBeCalled();

    jest.advanceTimersByTime(300000);

    expect(inProgress.current).toBe(false);
    expect(onComplete).toBeCalled();
  });

  it('useProgressiveTimeout stopProgress', async () => {
    const onProgress = jest.fn();
    const onComplete = jest.fn();

    jest.useFakeTimers();

    const { result: { current: [start, stopProgress, inProgress] } } = renderHook(() => useProgressiveTimeout(onProgress, onComplete, 100));

    expect(inProgress.current).toBe(false);

    start(30000);

    jest.advanceTimersByTime(1000);

    expect(inProgress.current).toBe(true);
    expect(onProgress).toBeCalled();
    stopProgress();

    jest.advanceTimersByTime(300000);

    expect(inProgress.current).toBe(false);
    expect(onComplete).not.toBeCalled();
  });
});
