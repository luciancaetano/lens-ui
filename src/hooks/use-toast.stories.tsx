/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import '../styles';
import Toast from '../components/elements/Toast/Toast';
import useToast from './use-toast';
import Button from '../components/elements/Button/Button';
import Icon from '../components/elements/Icon/Icon';
import { ToastProvider } from '../components/providers';

export default {
  title: 'Examples/Toast',
  component: Toast,
  decorators: [
    (Story) => <ToastProvider><Story /></ToastProvider>,
  ],
} as ComponentMeta<typeof Toast>;

export const _Toast = () => {
  const { addToast } = useToast();

  return (
    <Button
      intent="success"
      onClick={async () => {
        addToast({
          content: 'lorem impsum',
          icon: <Icon name="BsExclamationTriangleFill" />,
          intent: 'success',
          dismiss: 3000,
        });
      }}
    >
      Show Toast
    </Button>
  );
};
