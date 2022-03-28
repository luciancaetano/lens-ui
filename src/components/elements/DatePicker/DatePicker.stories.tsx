import React, { useState } from 'react';
/* eslint-disable react/destructuring-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DatePicker from './DatePicker';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';
import { DatePickerType } from './DatePicker.types';

export default {
  title: '2. Components/DatePicker',
  component: DatePicker,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

// eslint-disable-next-line func-names
const TemplateControlled = (args) => {
  const [state, setState] = useState((args as any).initial);

  return (
    <>
      <div>Value is {JSON.stringify(state)} </div>
      <DatePicker
        name="input"
        {...args}
        onChange={setState}
        value={state}
      />
    </>

  );
};

export const Date = Template.bind({});
export const DateControlled = TemplateControlled.bind({});

export const Range = (args) => (
  <Template
    name="input"
    type={'range' as DatePickerType}
    {...args}
  />
);

export const RangeControlled = (args) => (
  <TemplateControlled
    name="input"
    type={'range' as DatePickerType}
    {...args}
  />
);

export const MonthPicker = (args) => (
  <Template
    type={'month' as DatePickerType}
    name="input"
    displayFormat="MM"
    {...args}
  />
);

export const MonthControlled = (args) => (
  <TemplateControlled
    name="input"
    type={'month' as DatePickerType}
    {...args}
  />
);

export const YearPicker = (args) => (
  <Template
    type={'year' as DatePickerType}
    name="input"
    displayFormat="MM"
    {...args}
  />
);

export const YearControlled = (args) => (
  <TemplateControlled
    name="input"
    type={'year' as DatePickerType}
    {...args}
  />
);

export const Multiple = (args) => (
  <Template
    name="input"
    type={'multiple' as DatePickerType}
    time="analog"
    displayFormat="HH:mm:ss"
    {...args}
  />
);

export const MultipleControlled = (args) => (
  <TemplateControlled
    name="input"
    type={'multiple' as DatePickerType}
    {...args}
  />
);
