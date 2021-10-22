import React from 'react';
import clsx from 'clsx';
import { Container } from './Callout.styles';
import { ICalloutProps } from './Callout.types';
import { CLASSES } from '../../../css-classes';

const Callout: React.FC<ICalloutProps> = ({
  className, testingID, id, children, icon, intent, title,
}) => (
  <Container
    id={id}
    data-testid={testingID}
    className={clsx(CLASSES.FontReset, 'lens-ui-callout', intent && `intent-${intent}`, className)}
    dataColor={intent ? `var(--lens-ui-intents-${intent})` : 'var(--lens-ui-typography-text-color)'}
    dataColorLight={intent ? `var(--lens-ui-intents-${intent}-light)` : 'var(--lens-ui-typography-faded-text-color)'}
    dataColorLighten={intent ? `var(--lens-ui-intents-${intent}-lighten)` : 'var(--lens-ui-typography-faded-text-color)'}
  >
    <div className="lens-ui-callout-content-container">
      <div className="lens-ui-callout-icon-holder">
        {icon && icon}
      </div>
      <h1>{title}</h1>
      <div className="lens-ui-callout-content-holder">
        {children}
      </div>
    </div>
  </Container>
);

export default Callout;
