import React, { useState } from 'react';

import { IntentEnum } from '../../src/types/generic';

import Callout from '../../src/components/elements/Callout/Callout';
import Icon from '../../src/components/elements/Icon/Icon';
import FormGroup from '../../src/components/elements/FormGroup/FormGroup';
import Select from '../../src/components/elements/Select/Select';
import LensProvider from '../../src/components/providers/LensProvider/LensProvider';

export default {
  component: Callout,
  title: 'Feedback/Callout',
  excludeStories: /.*Data$/,
  decorators: [],
};

export const _Callout = () => (
  <LensProvider>
    <Callout icon={<Icon name="BsExclamationTriangleFill" size={70} />} title="Warning">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus tincidunt augue in turpis pulvinar dictum.
      Praesent in risus turpis. Suspendisse finibus quam mauris,
      vitae viverra sapien ornare eu.
    </Callout>
  </LensProvider>
);

export const Intents = () => {
  const [intent, setIntent] = useState(null);

  return (
    <LensProvider>
      <FormGroup label="Select Intent">
        <Select
          value={intent}
          onChange={(e) => setIntent(e)}
          options={Object.keys(IntentEnum).map((item) => ({
            label: item,
            value: item,
          }))}
        />
      </FormGroup>
      <Callout icon={<Icon name="BsExclamationTriangleFill" size={70} />} title="Title" intent={intent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus tincidunt augue in turpis pulvinar dictum.
        Praesent in risus turpis. Suspendisse finibus quam mauris,
        vitae viverra sapien ornare eu.
      </Callout>
    </LensProvider>
  );
};
