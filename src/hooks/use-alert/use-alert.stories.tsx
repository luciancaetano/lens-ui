/* eslint react/jsx-pascal-case: 0 */
import React from 'react';
import Button from '../../components/elements/Button/Button';
import useAlert from './index';

export default {
  title: 'Examples/Alert',
  excludeStories: /__.*$/,
};

useAlert.setDefaultButtonsText({
  cancelButtonText: 'Cancel Button',
  confirmButtonText: 'Confirm Button',
  denyButtonText: 'Deny Button',
});

export const _Alert = () => {
  const { alert } = useAlert();

  return (
    <Button onClick={async () => {
      alert(
        'This is an alert',
        null,
        null,
        {
          showConfirmButton: true,
          showCancelButton: true,
          showDenyButton: true,
        },
      );
    }}
    >
      Show Alert
    </Button>
  );
};
