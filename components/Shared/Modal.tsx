import React, { FunctionComponent, ReactNode } from 'react';
import Dialog from 'rc-dialog';

import 'rc-dialog/assets/index.css';

type Props = {
  visible: boolean;
  children: ReactNode;
  className?: string;
  closable?: boolean;
  footer?: ReactNode;
  onClose: () => void;
  closeIcon?: ReactNode;
};


const Modal: FunctionComponent<Props> = ({ visible, children, onClose }, ...restProps) => {
  return (
    <Dialog
      {...restProps}
      visible={visible}
      onClose={onClose}
    >
      {children}
    </Dialog>
  );
};

export default Modal;
