import clsx from 'clsx';
import React from 'react';

import { Container } from './ModalContent.styles';
import { IModalContentProps } from './ModalContent.types';

const ModalContent: React.FC<IModalContentProps> = ({
  className, testingID, id, children,
}) => (
  <Container
    id={id}
    data-testid={testingID}
    className={clsx('lens-ui-font-definition lens-ui-modal-content', className)}
  >
    {children}
  </Container>
);

export default ModalContent;
