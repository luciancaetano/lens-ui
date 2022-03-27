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

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} type={args.type as any || 'date'} />;

export const Default = Template.bind({});

export const Controlled = (args) => {
  const [state, setState] = useState(new Date('1991-03-03'));

  return (
    <>
      <div>Value is {state?.toISOString()} </div>
      <Template
        name="input"
        type={'date' as DatePickerType}
        {...args}
        onChange={setState}
        value={state}
      />
    </>

  );
};

export const Uncontrolled = (args) => (
  <Template
    name="input"
    type={'date' as DatePickerType}
    value={new Date()} /* value work as initialValue */
    {...args}
  />
);

export const Range = (args) => (
  <Template
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

export const YearPicker = (args) => (
  <Template
    type={'year' as DatePickerType}
    name="input"
    displayFormat="MM"
    {...args}
  />
);

export const TimePicker = (args) => (
  <Template
    name="input"
    type={'time' as DatePickerType}
    time="analog"
    displayFormat="HH:mm:ss"
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
