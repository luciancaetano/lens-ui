/* eslint react/jsx-pascal-case: 0 */
import React from 'react';
import Button from '../components/elements/Button/Button';
import { ApplicationProvider } from '../components/providers';
import useAlert from './use-alert';

export default {
  title: 'Hooks/useAlert/Example',
  excludeStories: /__.*$/,
  decorators: [
    (Story) => (<ApplicationProvider><Story /></ApplicationProvider>),
  ],
};

export const Example = () => {
  const { alert } = useAlert();

  return (
    <Button onClick={async () => {
      alert({
        text: 'This is an alert',
        settings: {
          showConfirmButton: true,
          showCancelButton: true,
          showDenyButton: true,
          cancelButtonText: 'Cancel',
          confirmButtonText: 'Move to trash',
          denyButtonText: 'Deny',
        },
      });

      alert({
        text: 'Hello world',
      });
    }}
    >
      Show Alert
    </Button>
  );
};
