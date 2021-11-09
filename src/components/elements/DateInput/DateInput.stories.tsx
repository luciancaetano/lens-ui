import React, { useState } from 'react';
import { formatISO } from 'date-fns';
/* eslint-disable react/destructuring-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DateInput from './DateInput';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: 'Components/DateInput',
  component: DateInput,
  decorators: [
    (Story) => <LensProvider><Story /></LensProvider>,
  ],
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
);

export const Default = Template.bind({});

export const Controlled = (args) => {
  const [state, setState] = useState(formatISO(new Date('1991-03-03')));

  return (
    <>
      <div>Value is {state} </div>
      <Template
        name="input"
        displayFormat="MM/DD/YYYY"
        onChange={(v) => setState(v as any)}
        value={state}
        {...args}
      />
    </>

  );
};

export const Uncontrolled = (args) => (
  <Template
    name="input"
    value={formatISO(new Date())} /* value work as initialValue */
    {...args}
  />
);
export const _MultiDateInput = (args) => (
  <Template
    name="input"
    type="multiple"
    value={['1991-03-03 00:00:00']}
    {...args}
  />
);

export const Range = (args) => (
  <Template
    name="input"
    type="range"
    {...args}
  />
);

export const MonthPicker = (args) => (
  <Template
    type="month-only"
    name="input"
    displayFormat="MM"
    {...args}
  />
);

export const YearPicker = (args) => (
  <Template
    name="input"
    type="year-only"
    displayFormat="YYYY"
    {...args}
  />
);

export const TimePicker = (args) => (
  <Template
    name="input"
    type="time-only"
    time="analog"
    displayFormat="HH:mm:ss"
    {...args}
  />
);
