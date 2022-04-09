/* eslint react/jsx-pascal-case: 0 */
import React from 'react';
import Button from '../components/elements/Button/Button';
import { LensProvider } from '../components/providers';
import useAlert from './use-alert';

export default {
  title: 'Hooks/useAlert/Example',
  excludeStories: /__.*$/,
  decorators: [
    (Story) => (<LensProvider><Story /></LensProvider>),
  ],
};

export const Example = () => {
  const { addAlert } = useAlert();

  return (
    <Button onClick={async () => {
      addAlert({
        text: 'Deseja mover para lixeira/excluir este registro?',
        settings: {
          showConfirmButton: true,
          showCancelButton: true,
          showDenyButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Mover para lixeira',
          denyButtonText: 'Excluir',
        },
      });

      addAlert({
        text: 'Notificação simples',
      });
    }}
    >
      Show Alert
    </Button>
  );
};
