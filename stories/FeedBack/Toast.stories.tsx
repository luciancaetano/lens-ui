/* eslint react/jsx-pascal-case: 0 */
import React from 'react';
import {
  LensProvider, useToast, Button, Icon, IntentEnum,
} from '../../src/index';

export default {
  title: 'Feedback/Toast',
  excludeStories: /__.*$/,
  decorators: [
    (Story) => (<LensProvider><Story /></LensProvider>),
  ],
};

export const Toast = () => {
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
                dismiss: 10000,
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
