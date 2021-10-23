import clsx from 'clsx';
import React from 'react';
import * as BsIcon from 'react-icons/bs';
import { CLASSES } from '../../../css-classes';
import { IIconProps } from './Icon.types';

const Icon:React.FC<IIconProps> = ({
  className, testingID, id, name, fill = null, size,
}) => React.createElement(BsIcon[name], {
  fill: fill ? `var(--lens-ui-intents-${fill})` : 'currentColor',
  className: clsx(CLASSES.ComponentName('Icon'), className),
  ...({ 'data-testid': testingID } as any),
  size,
  id,
});

export default Icon;
