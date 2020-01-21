import { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  filled?: boolean;
  primaryColor?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className: string;
  type: 'button' | 'submit';
  disabled?: boolean;
  withFixedHeight?: boolean;
};

const Button: FunctionComponent<Props> = ({
  filled,
  primaryColor,
  children,
  onClick,
  className,
  disabled,
  withFixedHeight,
  type,
}) => {
  const mainClassNames = classnames('c-Button pointer outline-transparent', {
    'bg-cyan': filled,
    'c-PrimaryButton': primaryColor,
    'c-withFixedHeight': withFixedHeight,
  });

  return (
  <button
    onClick={onClick}
    type={type}
    className={`${mainClassNames} ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
  );
};

export default Button;
