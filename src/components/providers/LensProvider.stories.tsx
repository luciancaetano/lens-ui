/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LensProvider from './LensProvider/LensProvider';
import '../../styles';
import { DefaultLocales } from '../../i18n/index';

export default {
  title: '1. Providers/LensProvider',
  component: LensProvider,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as ComponentMeta<typeof LensProvider>;

const Template: ComponentStory<typeof LensProvider> = function (args) {
  return (
    <LensProvider {...args}>
      <p>LensProvider is required for some functionality like modals, alerts, settings and more.</p>
      <p>Just put LensProvider with your redux Provider :p</p>
    </LensProvider>
  );
};

export const _Default = Template.bind({});

_Default.args = {
  deviceContextUpdateDebounceTime: 100,
  initialLocale: DefaultLocales.enUs,
  alertSettings: {
    responseLimit: 10,
  },
  toastSettings: {
    placement: 'bottom-right',
  },
};
