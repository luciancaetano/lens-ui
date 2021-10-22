import { formatISO } from 'date-fns';
import React, { useState } from 'react';
import { LensProvider, DateInput } from '../../src/index';

export default {
  component: DateInput,
  title: 'Inputs/DateInput',
  excludeStories: /.*Data$/,
};

export const Controlled = () => {
  const [state, setState] = useState(formatISO(new Date('1991-03-03')));

  return (
    <LensProvider>
      <div>Value is {state} </div>
      <DateInput
        name="input"
        displayFormat="MM/DD/YYYY"
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </LensProvider>
  );
};

export const Uncontrolled = () => (
  <LensProvider>
    <DateInput
      name="input"
      value={formatISO(new Date())} /* value work as initialValue */
    />
  </LensProvider>
);
export const _MultiDateInput = () => (
  <LensProvider>
    <DateInput
      name="input"
      type="multiple"
      value={['1991-03-03 00:00:00']}
    />
  </LensProvider>
);

export const Range = () => (
  <LensProvider>
    <DateInput
      name="input"
      type="range"
    />
  </LensProvider>
);

export const MonthPicker = () => (
  <LensProvider>
    <DateInput
      type="month-only"
      name="input"
      displayFormat="MM"
    />
  </LensProvider>
);

export const YearPicker = () => (
  <LensProvider>
    <DateInput
      name="input"
      type="year-only"
      displayFormat="YYYY"
    />
  </LensProvider>
);

export const TimePicker = () => (
  <LensProvider>
    <DateInput
      name="input"
      type="time-only"
      time="analog"
      displayFormat="HH:mm:ss"
    />
  </LensProvider>
);
