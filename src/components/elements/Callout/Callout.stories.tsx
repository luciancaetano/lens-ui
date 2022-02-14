/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Callout from './Callout';
import Icon from '../Icon/Icon';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/Callout',
  component: Callout,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args} icon={<Icon name="BsHouse" size="5rem" />}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut egestas massa mauris, eget mattis lorem fermentum a.
    Morbi at pretium ante. Aenean consequat justo vitae ullamcorper feugiat.
    Etiam nec tortor nec felis vehicula placerat id eu nisl.
    Aliquam erat volutpat.
    Etiam ullamcorper nibh ac neque auctor, id sollicitudin velit hendrerit.
    Curabitur et tortor vel tellus imperdiet rutrum ac tempus est. Proin ac sagittis enim.
  </Callout>
);

const TemplateIntents: ComponentStory<typeof Callout> = (args) => (
  <>
    <Callout intent="primary" icon={<Icon name="BsHouse" size="5rem" />} title="Primary" {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut egestas massa mauris, eget mattis lorem fermentum a.
      Morbi at pretium ante. Aenean consequat justo vitae ullamcorper feugiat.
      Etiam nec tortor nec felis vehicula placerat id eu nisl.
      Aliquam erat volutpat.
      Etiam ullamcorper nibh ac neque auctor, id sollicitudin velit hendrerit.
      Curabitur et tortor vel tellus imperdiet rutrum ac tempus est. Proin ac sagittis enim.
    </Callout>
    <Callout intent="secondary" icon={<Icon name="BsHouse" size="5rem" />} title="Secondary" {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut egestas massa mauris, eget mattis lorem fermentum a.
      Morbi at pretium ante. Aenean consequat justo vitae ullamcorper feugiat.
      Etiam nec tortor nec felis vehicula placerat id eu nisl.
      Aliquam erat volutpat.
      Etiam ullamcorper nibh ac neque auctor, id sollicitudin velit hendrerit.
      Curabitur et tortor vel tellus imperdiet rutrum ac tempus est. Proin ac sagittis enim.
    </Callout>
    <Callout intent="success" icon={<Icon name="BsHouse" size="5rem" />} title="Success" {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut egestas massa mauris, eget mattis lorem fermentum a.
      Morbi at pretium ante. Aenean consequat justo vitae ullamcorper feugiat.
      Etiam nec tortor nec felis vehicula placerat id eu nisl.
      Aliquam erat volutpat.
      Etiam ullamcorper nibh ac neque auctor, id sollicitudin velit hendrerit.
      Curabitur et tortor vel tellus imperdiet rutrum ac tempus est. Proin ac sagittis enim.
    </Callout>
    <Callout intent="info" icon={<Icon name="BsHouse" size="5rem" />} title="Info" {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut egestas massa mauris, eget mattis lorem fermentum a.
      Morbi at pretium ante. Aenean consequat justo vitae ullamcorper feugiat.
      Etiam nec tortor nec felis vehicula placerat id eu nisl.
      Aliquam erat volutpat.
      Etiam ullamcorper nibh ac neque auctor, id sollicitudin velit hendrerit.
      Curabitur et tortor vel tellus imperdiet rutrum ac tempus est. Proin ac sagittis enim.
    </Callout>
    <Callout intent="warning" icon={<Icon name="BsHouse" size="5rem" />} title="Warning" {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut egestas massa mauris, eget mattis lorem fermentum a.
      Morbi at pretium ante. Aenean consequat justo vitae ullamcorper feugiat.
      Etiam nec tortor nec felis vehicula placerat id eu nisl.
      Aliquam erat volutpat.
      Etiam ullamcorper nibh ac neque auctor, id sollicitudin velit hendrerit.
      Curabitur et tortor vel tellus imperdiet rutrum ac tempus est. Proin ac sagittis enim.
    </Callout>
    <Callout intent="danger" icon={<Icon name="BsHouse" size="5rem" />} title="Danger" {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut egestas massa mauris, eget mattis lorem fermentum a.
      Morbi at pretium ante. Aenean consequat justo vitae ullamcorper feugiat.
      Etiam nec tortor nec felis vehicula placerat id eu nisl.
      Aliquam erat volutpat.
      Etiam ullamcorper nibh ac neque auctor, id sollicitudin velit hendrerit.
      Curabitur et tortor vel tellus imperdiet rutrum ac tempus est. Proin ac sagittis enim.
    </Callout>
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Hello world',
};

export const Intents = TemplateIntents.bind({});
Intents.args = {
};
