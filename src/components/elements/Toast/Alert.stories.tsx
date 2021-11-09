/* eslint react/jsx-pascal-case: 0 */
import React from 'react';
import Button from './components/elements/Button/Button';
import LensProvider from './components/providers/LensProvider/LensProvider';
import { useAlert } from './hooks';

export default {
  title: '3. Hooks/Alert',
  excludeStories: /__.*$/,
  decorators: [
    (Story) => (<LensProvider><Story /></LensProvider>),
  ],
};

export const Alert = () => {
  const { addAlert, alertResults } = useAlert();

  return (
    <div>
      <div>
        o hook useAlert retorna um array [alertFn, results, data]<br />
        O Id de cada alerta é retornado na função alert, e suas repostas são guardas em um objeto para consulta<br />
        As respostas também podem ser consultadas pelo atributo promise do objeto retornado na função alert<br />
        <b>Note que estes alertas apenas armazenam respostas e nunca dados por segurança</b><br />
        <i>A prática do prompt neste design system não é recomendada, as questões de dados aos usuários devem ser feitas dentro de formulários</i>
        <br />
        <code>
          <pre>
            {JSON.stringify(alertResults, null, '\t')}
          </pre>
        </code>

      </div>
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
    </div>
  );
};
