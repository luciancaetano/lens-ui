import clsx from 'clsx';
import React, { useCallback } from 'react';
import { CLASSES } from '../../../css-classes';
import Icon from '../Icon/Icon';
import { Container } from './ModalHeader.styles';
import { IModalHeaderProps } from './ModalHeader.types';

const ModalHeader: React.FC<IModalHeaderProps> = ({
  className, testingID, id, children, onClose,
}) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose('x-close-header');
    }
  }, [onClose]);

  return (
    <Container
      id={id}
      data-testid={testingID}
      className={clsx(CLASSES.FontReset, 'lens-ui-modal-header', className)}
      rightPadding={onClose ? 0.8 : 1}
    >
      <header>
        {children}
      </header>
      {onClose && (
        <button className="close-button-holder" onClick={handleClose}>
          <Icon name="BsX" size="1.5rem" />
        </button>
      )}
    </Container>
  );
};

export default ModalHeader;
