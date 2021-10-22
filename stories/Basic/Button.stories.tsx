import React from 'react';
import {
  Button, AdvancedIntentEnum, ButtonAppearanceEnum, LensProvider,
} from '../../src/index';

export default {
  component: Button,
  title: 'Basic/Button',
  excludeStories: /.*Data$/,
  decorators: [],
};

export const Default = () => <LensProvider><Button>Hello World</Button></LensProvider>;

export const ActiveButton = () => <LensProvider><Button active>Hello World</Button></LensProvider>;

export const Intents = () => (
  <LensProvider>
    <table cellSpacing={0}>
      <thead>
        <tr>
          <th>&nbsp;</th>
          {Object.keys(AdvancedIntentEnum).map((iv) => <th style={{ borderBottom: '1px solid #333' }}>{iv.toUpperCase()}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Default</td>
          {Object.keys(AdvancedIntentEnum).map((intent) => (
            <td style={{
              textAlign: 'center',
              verticalAlign: 'center',
              paddingRight: 20,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            >
              <Button intent={intent as any}>
                Button
              </Button>
            </td>
          ))}
        </tr>

        <tr>
          <td>Small Size</td>
          {Object.keys(AdvancedIntentEnum).map((intent) => (
            <td style={{
              textAlign: 'center',
              verticalAlign: 'center',
              paddingRight: 20,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            >
              <Button size="small" intent={intent as any}>
                Button
              </Button>
            </td>
          ))}
        </tr>

        <tr>
          <td>Large Size</td>
          {Object.keys(AdvancedIntentEnum).map((intent) => (
            <td style={{
              textAlign: 'center',
              verticalAlign: 'center',
              paddingRight: 20,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            >
              <Button size="large" intent={intent as any}>
                Button
              </Button>
            </td>
          ))}
        </tr>

        <tr>
          <td>Disabled</td>
          {Object.keys(AdvancedIntentEnum).map((intent) => (
            <td style={{
              textAlign: 'center',
              verticalAlign: 'center',
              paddingRight: 20,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            >
              <Button disabled intent={intent as any}>
                Button
              </Button>
            </td>
          ))}
        </tr>

        <tr>
          <td>Minimal</td>
          {Object.keys(AdvancedIntentEnum).map((intent) => (
            <td style={{
              textAlign: 'center',
              verticalAlign: 'center',
              paddingRight: 20,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            >
              <Button appearance="minimal" intent={intent as any}>
                Button
              </Button>
            </td>
          ))}
        </tr>

        <tr>
          <td>Outlined</td>
          {Object.keys(AdvancedIntentEnum).map((intent) => (
            <td style={{
              textAlign: 'center',
              verticalAlign: 'center',
              paddingRight: 20,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            >
              <Button appearance="outlined" intent={intent as any}>
                Button
              </Button>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </LensProvider>
);

export const Appearance = () => Object.keys(ButtonAppearanceEnum).map((appearance) => (
  <LensProvider>
    <div style={{ padding: '10px', display: 'inline' }}>
      <Button appearance={appearance as any} style={{ textTransform: 'capitalize' }}>{appearance}</Button>
    </div>
  </LensProvider>
));
