import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Toast from './Toast';
import { IToastData } from '../../providers';

const removeToast = jest.fn();

jest.mock('../../../hooks', () => ({
  useDevice: () => ({
    isDesktop: true,
    isPhone: false,
    isTablet: false,
    online: true,
    orientation: 'landscape',
    os: 'android',
    windowSize: {
      width: 1920,
      height: 1080,
    },
  }),
  useToast: () => ({
    removeToast,
  }),
}));

jest.useFakeTimers();

const data: IToastData = {
  content: 'toast_content',
  id: 'toast_id',
  intent: 'info',
  className: 'myCustomClass',
  icon: 'my_icon',
};

describe('<Toast/>', () => {
  beforeEach(() => {
    removeToast.mockClear();
  });

  it('render <Toast/>', async () => {
    const { container } = render(
      <Toast data={data} />,
    );

    expect(container.querySelector<HTMLElement>('.lens-ui-toasts-toast')).toMatchSnapshot();
  });

  it('render <Toast/> with invalid dismiss', async () => {
    const { container } = render(
      <Toast data={{ ...data, dismiss: 'invalidvalue' as any }} />,
    );

    expect(container.querySelector<HTMLElement>('.lens-ui-toasts-toast')).toMatchSnapshot();
  });

  it('render <Toast/> close toast', async () => {
    render(
      <Toast data={{ ...data, dismiss: 300 }} />,
    );
    jest.advanceTimersByTime(1000);

    fireEvent.click(window.document.querySelector<HTMLElement>('[data-lens-element="toast__close-button"]') as HTMLElement);

    expect(removeToast).toHaveBeenCalled();
  });

  it('render <Toast/> autoDismiss toast', async () => {
    render(
      <Toast data={{ ...data, dismiss: 300 }} />,
    );
    jest.advanceTimersByTime(1000);

    expect(removeToast).toHaveBeenCalled();
  });
});
