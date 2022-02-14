import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import LensProvider from '../../providers/LensProvider/LensProvider';
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
      <LensProvider>
        <Toast data={data} />
      </LensProvider>,
    );

    expect(container.querySelector('.lens-ui-toasts-toast')).toMatchSnapshot();
  });

  it('render <Toast/> with invalid dismiss', async () => {
    const { container } = render(
      <LensProvider>
        <Toast data={{ ...data, dismiss: 'invalidvalue' as any }} />
      </LensProvider>,
    );

    expect(container.querySelector('.lens-ui-toasts-toast')).toMatchSnapshot();
  });

  it('render <Toast/> close toast', async () => {
    render(
      <LensProvider>
        <Toast data={{ ...data, dismiss: 300 }} />
      </LensProvider>,
    );
    jest.advanceTimersByTime(1000);

    fireEvent.click(window.document.querySelector('[data-lens-element="toast__close-button"]'));

    expect(removeToast).toHaveBeenCalled();
  });

  it('render <Toast/> autoDismiss toast', async () => {
    render(
      <LensProvider>
        <Toast data={{ ...data, dismiss: 300 }} />
      </LensProvider>,
    );
    jest.advanceTimersByTime(1000);

    expect(removeToast).toHaveBeenCalled();
  });
});
