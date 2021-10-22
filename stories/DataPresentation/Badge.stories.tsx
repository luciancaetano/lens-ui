import React, { useState } from 'react';

import Badge from '../../src/components/elements/Badge/Badge';
import LensProvider from '../../src/components/providers/LensProvider/LensProvider';
import Icon from '../../src/components/elements/Icon/Icon';
import FormGroup from '../../src/components/elements/FormGroup/FormGroup';
import Select from '../../src/components/elements/Select/Select';
import { IntentEnum } from '../../src/types/generic';

export default {
  component: Badge,
  title: 'Data Presentation/Badge',
  excludeStories: /.*Data$/,
  decorators: [],
};

export const _Badge = () => (
  <LensProvider>
    <Badge>Default intent</Badge>
    <Badge intent="success">Hello World</Badge>
    <Badge intent="warning">Warning</Badge>
    <Badge intent="danger">Danger</Badge>
  </LensProvider>
);

export const Intents = () => {
  const [intent, setIntent] = useState('secondary');

  return (
    <LensProvider>
      <FormGroup label="Select Intent">
        <Select
          value={intent}
          onChange={(e) => setIntent(e as any)}
          options={Object.keys(IntentEnum).map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </FormGroup>
      <Badge intent={intent as any}>
        <Icon name="BsAlarm" />
      </Badge>
    </LensProvider>
  );
};
