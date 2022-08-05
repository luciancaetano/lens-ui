/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import '../styles';
import Toast from '../components/elements/Toast/Toast';
import { ApplicationProvider } from '../components/providers';
import useToast from './use-toast';
import Button from '../components/elements/Button/Button';
import Icon from '../components/elements/Icon/Icon';

export default {
  title: 'Hooks/useToast/Example',
  component: Toast,
  decorators: [
    (Story) => <ApplicationProvider><Story /></ApplicationProvider>,
  ],
} as ComponentMeta<typeof Toast>;

export const Example = () => {
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
