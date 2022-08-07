/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal, { ModalSizeEnum } from '../components/elements/Modal';
import Button from '../components/elements/Button/Button';
import '../styles';
import Select from '../components/elements/Select/Select';
import useAlert from './use-alert';
import { ApplicationProvider } from '../components/providers';
import useModal from './use-modal';

export default {
  title: 'Hooks/useModal/examples',
  component: Modal,
  decorators: [
    (Story) => <ApplicationProvider><Story /></ApplicationProvider>,
  ],
} as ComponentMeta<typeof Modal>;

const ModalTemplate: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

interface ISimpleModalCMPProps{
  size?: any;
}

const SimpleModalCMP: React.FC<ISimpleModalCMPProps> = (args) => {
  const { closeModal } = useModal();
  return (
    <ModalTemplate {...args} onBackdropClick={(r) => closeModal(r)} onEscape={(r) => closeModal(r)}>
      <Modal.Header onClose={(r) => closeModal(r)}>Header</Modal.Header>
      <Modal.Content>
        Content ${args.size}
        <Select options={[{ label: 'option1', value: 1 }, { label: 'option2', value: 2 }]} />
      </Modal.Content>
      <Modal.Footer>
        <Button intent="danger" onClick={() => closeModal('cancel')}>
          Cancel
        </Button>
        <Button intent="success" onClick={() => closeModal('ok')}>
          Ok
        </Button>
      </Modal.Footer>
    </ModalTemplate>
  );
};

export const _Modal = (args) => {
  const [response, setResponse] = useState('');
  const { showModal } = useModal();
  return (
    <div>
      Modal response is <b>{response}</b>
      <br />
      <Button onClick={async () => {
        setResponse(await showModal(SimpleModalCMP, args));
      }}
      >Show Modal
      </Button>
    </div>
  );
};

export const Sizes = (args) => {
  const [response, setResponse] = useState('');
  const { showModal } = useModal();
  return (
    <div>
      Modal response is <b>{response}</b>
      <br />
      {Object.keys(ModalSizeEnum).map((size) => (
        <div style={{ padding: '1rem' }}>
          <Button onClick={async () => {
            setResponse(await showModal<ISimpleModalCMPProps>(SimpleModalCMP, { size, ...args }));
          }}
          >
            Show Modal {size}
          </Button>

        </div>
      ))}
    </div>
  );
};

const SimpleModalStackedCMP: React.FC<ISimpleModalCMPProps> = ({ size }) => {
  const { closeModal, showModal } = useModal();
  const { addAlert } = useAlert();
  return (
    <ModalTemplate onBackdropClick={(r) => closeModal(r)} size={size as any} onEscape={(r) => closeModal(r)}>
      <Modal.Header onClose={(r) => closeModal(r)}>Layers :D</Modal.Header>
      <Modal.Content>
        Modal Layers ${size}
      </Modal.Content>
      <Modal.Footer>
        <Button
          intent="danger"
          onClick={async () => {
            const result = await showModal<any, string>(SimpleModalCMP, { size: ModalSizeEnum.medium });
            addAlert({
              title: 'Modal Result is',
              text: result,
            });
          }}
        >
          OpenAnotherLayer
        </Button>
        <Button intent="success" onClick={() => closeModal('ok')}>
          Ok
        </Button>
      </Modal.Footer>
    </ModalTemplate>
  );
};

export const Stacked = (args) => {
  const [response, setResponse] = useState('');
  const { showModal } = useModal();
  return (
    <div>
      Modal response is <b>{response}</b>
      <br />
      <div style={{ padding: '1rem' }}>
        <Button onClick={async () => {
          setResponse(await showModal<ISimpleModalCMPProps>(SimpleModalStackedCMP, { size: ModalSizeEnum.normal, ...args } as any));
        }}
        >
          Show Modal
        </Button>
      </div>
    </div>
  );
};
