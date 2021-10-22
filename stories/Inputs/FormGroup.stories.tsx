import React from 'react';
import {
  LensProvider, FormGroup, Divider, FormFooter,
} from '../../src/index';

export default {
  component: FormGroup,
  title: 'Inputs/FormGroup',
  excludeStories: /.*Data$/,
  decorators: [],
};

export const _FormGroup = () => (
  <LensProvider>
    <FormGroup
      label="Input Label"
      helperText="Helper text"
      helperTextIntent="danger"
      required
      labelFor="inputId"
      inline
    >
      <input type="text" id="inputId" />
    </FormGroup>
  </LensProvider>
);

export const _Divider = () => (
  <LensProvider>
    <FormGroup
      label="Input 1"
    >
      <input type="text" />
    </FormGroup>
    <Divider>Divider title</Divider>

    <FormGroup
      label="Input 1"
    >
      <input type="text" />
    </FormGroup>
  </LensProvider>
);

export const _FormFooter = () => (
  <LensProvider>
    <FormFooter
      cancelIsReset
      state="ready"
      onSave="submit"
      onCancel={() => { }}
      onDelete={() => { }}
    />
  </LensProvider>
);
