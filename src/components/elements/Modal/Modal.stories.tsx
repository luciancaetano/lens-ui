/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import useModal from '../../../hooks/use-modal';
import Select from '../Select/Select';
import useAlert from '../../../hooks/use-alert';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalContent from '../ModalContent/ModalContent';
import ModalFooter from '../ModalFooter/ModalFooter';
import Button from '../Button/Button';
import { ModalSizeEnum } from './Modal.types';

export default {
  title: '3. Hooks/useModal',
  component: Modal,
  decorators: [
    (Story) => <LensProvider><Story /></LensProvider>,
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
      <ModalHeader onClose={(r) => closeModal(r)}>Header</ModalHeader>
      <ModalContent>
        Content ${args.size}
        <Select options={[{ label: 'option1', value: 1 }, { label: 'option2', value: 2 }]} />
      </ModalContent>
      <ModalFooter>
        <Button intent="danger" onClick={() => closeModal('cancel')}>
          Cancel
        </Button>
        <Button intent="success" onClick={() => closeModal('ok')}>
          Ok
        </Button>
      </ModalFooter>
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
      <ModalHeader onClose={(r) => closeModal(r)}>Layers :D</ModalHeader>
      <ModalContent>
        Modal Layers ${size}
      </ModalContent>
      <ModalFooter>
        <Button
          intent="danger"
          onClick={async () => {
            const result = await showModal<any, string>(SimpleModalCMP, { size: ModalSizeEnum.medium });
            addAlert({
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
