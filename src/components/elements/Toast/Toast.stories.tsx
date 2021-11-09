/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Toast from './Toast';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import { useToast } from '../../../hooks';
import { IntentEnum } from '../../../types';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export default {
  title: 'Components/useToast',
  decorators: [
    (Story) => <LensProvider><Story /></LensProvider>,
  ],
};

export const _Toast = () => {
  const { addToast, toasts } = useToast();

  return (
    <div>
      {Object.keys(IntentEnum).map((intent) => (
        <div style={{ width: '100%', paddingBottom: 10 }}>
          <Button
            intent={intent as any}
            onClick={async () => {
              addToast({
                content: 'lorem impsum',
                icon: <Icon name="BsExclamationTriangleFill" />,
                intent: intent as any,
                dismiss: 3000,
              });
            }}
          >
            Show Toast {intent.toUpperCase()}
          </Button>
        </div>
      ))}

      <Button
        intent="success"
        onClick={async () => {
          addToast({
            content: 'lorem impsum',
            icon: <Icon name="BsExclamationTriangleFill" />,
            intent: 'success',
            actions: [
              {
                content: <div>My Action</div>,
                intent: 'success',
              },
            ],
          });
        }}
      >
        Show Toast with action
      </Button>

      <div style={{ maxHeight: 500, overflowY: 'scroll' }}>
        <code>
          <pre>
            {JSON.stringify(toasts, null, '\t')}
          </pre>
        </code>
      </div>
    </div>
  );
};
