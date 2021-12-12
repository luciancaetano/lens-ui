import clsx from 'clsx';
import React from 'react';
import * as BsIcon from 'react-icons/bs';
import { IIconProps } from './Icon.types';

/**
 * Guidance and suggestions for using icons with LensUI.
 */
const Icon:React.FC<IIconProps> = function ({
  className, testingID, id, name, fill = null, size, ...props
}) {
  return React.createElement(BsIcon[name], {
    ...props,
    fill: fill ? `var(--lens-ui-intents-${fill})` : 'currentColor',
    'data-lens-element': 'icon',
    className: clsx(className),
    ...({ 'data-testid': testingID } as any),
    size,
    id,
  });
};

export default Icon;
