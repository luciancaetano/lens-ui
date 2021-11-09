/* eslint react/jsx-pascal-case: 0 */
import React, { useState } from 'react';
import {
  LensProvider, MessageBox, IntentEnum,
} from '../../src/index';

export default {
  component: MessageBox,
  title: 'Feedback/MessageBox',
  excludeStories: /__.*$/,
};

export const _MessageBox = () => (
  <LensProvider>
    {Object.keys(IntentEnum).map((intent: any) => (
      <>
        <MessageBox intent={intent} title="My message box">
          Hello world {intent}
        </MessageBox>
      </>
    ))}
  </LensProvider>
);

export const _MessageBoxStripped = () => (
  <LensProvider>
    {Object.keys(IntentEnum).map((intent: any) => (
      <>
        <MessageBox intent={intent} title="My message box" striped>
          Hello world {intent}
        </MessageBox>
      </>
    ))}
  </LensProvider>
);

export const _Timeout = () => (
  <LensProvider>
    {Object.keys(IntentEnum).map((intent: any, index: number) => (
      <>
        <MessageBox intent={intent} title="My message box" timeout={1000 + (index * 1000)}>
          Hello world {intent}
        </MessageBox>
      </>
    ))}
  </LensProvider>
);

export const CloseDisabled = () => (
  <LensProvider>
    {Object.keys(IntentEnum).map((intent: any) => (
      <>
        <MessageBox intent={intent} title="My message box" closable={false}>
          Hello world {intent}
        </MessageBox>
      </>
    ))}
  </LensProvider>
);

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <LensProvider>
      <MessageBox isOpen={isOpen} intent="success" title="My message box" onClose={setIsOpen}>
        Hello world
      </MessageBox>
    </LensProvider>
  );
};

export const ControlledWithoutOnChange = () => (
  <LensProvider>
    <MessageBox isOpen intent="success" title="My message box">
      Hello world
    </MessageBox>
    <MessageBox isOpen intent="danger" title="My message box" timeout={3000}>
      Hello world
    </MessageBox>
  </LensProvider>
);

export const ControlledTimeout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <LensProvider>
      <MessageBox isOpen={isOpen} intent="success" title="My message box" timeout={3000} onClose={setIsOpen}>
        Hello world
      </MessageBox>
    </LensProvider>
  );
};
