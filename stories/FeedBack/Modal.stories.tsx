import React, { useState } from 'react';

import {
  LensProvider, Modal, ModalContent, ModalFooter, ModalHeader, Button, useModal, ModalSizeEnum, useAlert,
} from '../../src/index';

export default {
  component: Modal,
  title: 'Feedback/Modal',
  excludeStories: /.*CMP$/,
  decorators: [
    (Story) => (<LensProvider><Story /></LensProvider>),
  ],
};

interface ISimpleModalCMPProps{
  size?: any;
}

export const SimpleModalCMP: React.FC<ISimpleModalCMPProps> = ({ size }) => {
  const { closeModal } = useModal();
  return (
    <Modal onBackdropClick={(r) => closeModal(r)} size={size as any} onEscape={(r) => closeModal(r)}>
      <ModalHeader onClose={(r) => closeModal(r)}>Header</ModalHeader>
      <ModalContent>
        Content ${size}
      </ModalContent>
      <ModalFooter>
        <Button intent="danger" onClick={() => closeModal('cancel')}>
          Cancel
        </Button>
        <Button intent="success" onClick={() => closeModal('ok')}>
          Ok
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export const SimpleModalStackedCMP: React.FC<ISimpleModalCMPProps> = ({ size }) => {
  const { closeModal, showModal } = useModal();
  const { alert } = useAlert();
  return (
    <Modal onBackdropClick={(r) => closeModal(r)} size={size as any} onEscape={(r) => closeModal(r)}>
      <ModalHeader onClose={(r) => closeModal(r)}>Layers :D</ModalHeader>
      <ModalContent>
        Modal Layers ${size}
      </ModalContent>
      <ModalFooter>
        <Button
          intent="danger"
          onClick={async () => {
            const result = await showModal<any, string>(SimpleModalCMP, { size: ModalSizeEnum.medium });
            alert({
              title: 'Modal Result is',
              text: result,
            }, '123');
          }}
        >
          OpenAnotherLayer
        </Button>
        <Button intent="success" onClick={() => closeModal('ok')}>
          Ok
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export const _Modal = () => {
  const [response, setResponse] = useState('');
  const { showModal } = useModal();
  return (
    <div>
      Modal response is <b>{response}</b>
      <br />
      <Button onClick={async () => {
        setResponse(await showModal(SimpleModalCMP, {}));
      }}
      >Show Modal
      </Button>
    </div>
  );
};

export const Sizes = () => {
  const [response, setResponse] = useState('');
  const { showModal } = useModal();
  return (
    <div>
      Modal response is <b>{response}</b>
      <br />
      {Object.keys(ModalSizeEnum).map((size) => (
        <div style={{ padding: '1rem' }}>
          <Button onClick={async () => {
            setResponse(await showModal<ISimpleModalCMPProps>(SimpleModalCMP, { size }));
          }}
          >
            Show Modal {size}
          </Button>

        </div>
      ))}
    </div>
  );
};

export const Stacked = () => {
  const [response, setResponse] = useState('');
  const { showModal } = useModal();
  return (
    <div>
      Modal response is <b>{response}</b>
      <br />
      <div style={{ padding: '1rem' }}>
        <Button onClick={async () => {
          setResponse(await showModal<ISimpleModalCMPProps>(SimpleModalStackedCMP, { size: ModalSizeEnum.normal }));
        }}
        >
          Show Modal
        </Button>
      </div>
    </div>
  );
};
