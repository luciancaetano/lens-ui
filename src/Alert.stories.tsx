/* eslint react/jsx-pascal-case: 0 */
import React from 'react';
import Button from './components/elements/Button/Button';
import LensProvider from './components/providers/LensProvider/LensProvider';
import { useAlert } from './hooks';

export default {
  title: '3. Hooks/useAlert',
  excludeStories: /__.*$/,
  decorators: [
    (Story) => (<LensProvider><Story /></LensProvider>),
  ],
};

export var Alert = function () {
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
