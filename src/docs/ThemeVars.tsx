import React, { useCallback } from 'react';
import Typography from '../components/elements/Typography/Typography';
import List from '../components/elements/List';
import TextInput from '../components/elements/TextInput/TextInput';
import { Button, CheckBox } from '../components/elements';

function ThemeVars() {
  const vars = ((Array.from(document.styleSheets) as any)
    .filter(
      (sheet: any) => sheet.href === null || sheet.href.startsWith(window.location.origin),
    )
    .reduce(
      (acc: any, sheet: any) => ([
        ...acc,
        ...(Array.from(sheet.cssRules) as any).reduce(
          (def: any, rule: any) => (rule.selectorText === ':root'
            ? [
              ...def,
              ...Array.from(rule.style).filter((name:any) => name.startsWith('--')),
            ]
            : def),
          [],
        ),
      ]),
      [],
    )).filter((v: string) => String(v).startsWith('--lens-ui'));

  const handleChange = useCallback((varName: string) => (value: string) => {
    document.documentElement.style
      .setProperty(varName, value);
  }, []);

  return (
    <>
      <div style={{ padding: '1rem' }}>
        <Button intent="primary">primary</Button>&nbsp;
        <Button intent="secondary">secondary</Button>&nbsp;
        <Button intent="success">success</Button>&nbsp;
        <Button intent="info">info</Button>&nbsp;
        <Button intent="warning">warning</Button>&nbsp;
        <Button intent="danger">danger</Button>&nbsp;
        <Button intent="dark">dark</Button>&nbsp;
        <Button intent="light">light</Button>
      </div>
      <div style={{ padding: '1rem' }}>
        <CheckBox label="It's all ok, 🔥" defaultChecked />
      </div>
      <List>

        <List.Item prefix={<Typography variant="h6">Variable</Typography>} suffix={<Typography variant="h6">Default Value</Typography>} />
        {vars.map((item: string) => (
          <List.Item
            key={item}
            cursor="pointer"
            suffix={(
              <TextInput
                defaultValue={getComputedStyle(document.documentElement)
                  .getPropertyValue(item)}
                onChange={handleChange(item)}
              />
            )}
          >
            {item}
          </List.Item>
        ))}
      </List>
    </>
  );
}

export default ThemeVars;
