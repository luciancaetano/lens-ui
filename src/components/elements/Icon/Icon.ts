import clsx from 'clsx';
import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';
import { IIconProps } from './Icon.types';
import styles from './Icon.module.scss';
import { IntentEnum } from '../../../types';

const icons = {
  ...BsIcons, ...AiIcons, ...FaIcons, ...GoIcons, ...MdIcons,
};
/**
 * Guidance and suggestions for using icons with LensUI.
 */
const Icon:React.FC<IIconProps> = ({
  className, testingID, id, name, fill = null, size = '1rem', spin, iconsSet = icons, ...props
}) => React.createElement(iconsSet[name], {
  ...props,
  fill: Object.keys(IntentEnum).indexOf(fill) > -1 ? `var(--lens-ui-intents-${fill})` : fill,
  'data-lens-element': 'icon',
  className: clsx(spin && styles.spin, className),
  ...({ 'data-testid': testingID } as any),
  size,
  id,
});

export default Icon;
