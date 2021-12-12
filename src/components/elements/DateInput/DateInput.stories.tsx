import React, { useState } from 'react';
import { formatISO } from 'date-fns';
/* eslint-disable react/destructuring-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DateInput from './DateInput';
import LensProvider from '../../providers/LensProvider/LensProvider';
import '../../../styles';

export default {
  title: '2. Components/DateInput',
  component: DateInput,
  decorators: [
    (Story) => <LensProvider>{Story()}</LensProvider>,
  ],
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = function (args) {
  return <DateInput {...args} />;
};

export const Default = Template.bind({});

export var Controlled = function (args) {
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

export var Uncontrolled = function (args) {
  return (
    <Template
      name="input"
      value={formatISO(new Date())} /* value work as initialValue */
      {...args}
    />
  );
};
export var _MultiDateInput = function (args) {
  return (
    <Template
      name="input"
      type="multiple"
      value={['1991-03-03 00:00:00']}
      {...args}
    />
  );
};

export var Range = function (args) {
  return (
    <Template
      name="input"
      type="range"
      {...args}
    />
  );
};

export var MonthPicker = function (args) {
  return (
    <Template
      type="month-only"
      name="input"
      displayFormat="MM"
      {...args}
    />
  );
};

export var YearPicker = function (args) {
  return (
    <Template
      name="input"
      type="year-only"
      displayFormat="YYYY"
      {...args}
    />
  );
};

export var TimePicker = function (args) {
  return (
    <Template
      name="input"
      type="time-only"
      time="analog"
      displayFormat="HH:mm:ss"
      {...args}
    />
  );
};
