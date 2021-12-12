import React from 'react';
import clsx from 'clsx';
import styles from './Callout.module.scss';
import { ICalloutProps } from './Callout.types';

/**
 * Callouts contains call to actions in a single subject.
 */
const Callout: React.FC<ICalloutProps> = function ({
  className, testingID, id, children, icon, intent, title, ...props
}) {
  return (
    <div
      {...props}
      id={id}
      data-lens-element="callout"
      data-lens-intent={intent}
      data-testid={testingID}
      className={clsx(styles.callout, className)}
    >
      <div className={styles[`callout__content-container-intent-${intent || 'default'}`]} data-lens-element="callout__container">
        <div className={styles[`callout__content-container-intent-${intent || 'default'}__icon-handler`]} data-lens-element="callout__icon">
          {icon && icon}
        </div>
        <h1 className={styles[`callout__content-container-intent-${intent || 'default'}__title`]} data-lens-element="callout__title">{title}</h1>
        <div className={styles[`callout__content-container-intent-${intent || 'default'}__content-handler`]} data-lens-element="callout__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Callout;
