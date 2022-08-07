import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { IDeviceInfo } from '../../../providers/DeviceProvider/DeviceProvider.types';
import { useDevice } from '../../../../hooks';
import { ModalSizeEnum, ModalSizeEnumType } from './Modal.types';

jest.useFakeTimers();

jest.mock('../../../hooks', () => ({
  useDevice: jest.fn(() => ({
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
  } as IDeviceInfo)),
}));

jest.mock('../../../utils', () => ({
  ...jest.requireActual('../../../utils') as any,
  modalCanEscape: () => true,
  isBackdropClick: () => true,
}));

describe('<Modal/>', () => {
  it('render modal with children content', async () => {
    const myChildren = 'SweetChiledOMine';
    const { getByText } = render(<Modal>{myChildren}</Modal>);

    expect(getByText(myChildren)).toBeInTheDocument();
  });

  it('trigger onBackdropClick event', async () => {
    const onBackdropClick = jest.fn();
    const { container } = render(
      <Modal onBackdropClick={onBackdropClick}>Hello world</Modal>
      ,
    );

    const backdrop: HTMLElement = container.querySelector<HTMLElement>('[data-lens-element="modal__backdrop"]') as HTMLElement;

    expect(backdrop).toBeInTheDocument();

    fireEvent.click(backdrop);

    expect(onBackdropClick).toBeCalled();
  });

  // it('trigger onEscape event', async () => {
  //   const onEscape = jest.fn();
  //   render(
  //
  //       <div id={PORTAL_ROOT_ID}>
  //         <Modal onEscape={onEscape}>Hello world</Modal>
  //       </div>
  //     ,
  //   );

  //   fireEvent.keyDown(document, {
  //     key: 'Escape',
  //     code: 'Escape',
  //     keyCode: 27,
  //     charCode: 27,
  //   });

  //   expect(onEscape).toBeCalled();
  // });

  it('render fullscreen when isPhone', async () => {
    (useDevice as jest.Mock<any, any>).mockReturnValue({
      isDesktop: false,
      isPhone: true,
      isTablet: false,
      online: true,
      orientation: 'landscape',
      os: 'android',
      windowSize: {
        width: 375,
        height: 812,
      },
    } as IDeviceInfo);

    render(

      <Modal>Hello world</Modal>
      ,
    );

    expect(window.document.querySelector<HTMLElement>(`[data-lens-modal-size="${ModalSizeEnum.fullscreen}"]`)).toBeInTheDocument();
  });

  it('render sizes', async () => {
    (useDevice as jest.Mock<any, any>).mockReturnValue({
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
    } as IDeviceInfo);

    const runTest = (size: string): any => (

      <Modal size={size as ModalSizeEnumType}>Hello world</Modal>

    );

    const { rerender } = render(runTest(ModalSizeEnum.normal));

    expect(window.document.querySelector<HTMLElement>(`[data-lens-modal-size="${ModalSizeEnum.normal}"]`) as HTMLElement).toBeInTheDocument();

    rerender(runTest(ModalSizeEnum.medium));
    expect(window.document.querySelector<HTMLElement>(`[data-lens-modal-size="${ModalSizeEnum.medium}"]`) as HTMLElement).toBeInTheDocument();

    rerender(runTest(ModalSizeEnum.fullscreen));
    expect(window.document.querySelector<HTMLElement>(`[data-lens-modal-size="${ModalSizeEnum.fullscreen}"]`) as HTMLElement).toBeInTheDocument();
  });
});
