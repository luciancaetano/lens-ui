import clsx from 'clsx';
import React from 'react';
import { CLASSES } from '../../../css-classes';
import { Container } from './ModalFooter.styles';
import { IModalFooterProps } from './ModalFooter.types';

const ModalFooter: React.FC<IModalFooterProps> = ({
  className, testingID, id, children,
}) => (
  <Container
    id={id}
    data-testid={testingID}
    className={clsx(CLASSES.FontReset, 'lens-ui-modal-footer', className)}
  >
    {children}
  </Container>
);

export default ModalFooter;
