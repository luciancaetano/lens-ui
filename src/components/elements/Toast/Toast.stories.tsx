/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Toast from './Toast';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import { useToast } from '../../../hooks';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export default {
  title: '3. Hooks/useToast',
  component: Toast,
  decorators: [
    (Story) => <LensProvider><Story /></LensProvider>,
  ],
} as ComponentMeta<typeof Toast>;

export var _Toast = function () {
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
