import { FunctionComponent, ReactNode, SyntheticEvent } from 'react';
import classnames from 'classnames';

type Props = {
  filled?: boolean;
  primaryColor?: boolean;
  children: ReactNode;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  className: string;
  type: 'button' | 'submit';
  disabled?: boolean;
  withFixedHeight?: boolean;
  id?: string;
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
  ...others
}) => {
  const mainClassNames = classnames('c-Button pointer outline-transparent', {
    'bg-cyan': filled && !disabled,
    'c-PrimaryButton': primaryColor,
    'c-withFixedHeight': withFixedHeight,
    'bg-black-50': disabled,
  });

  return (
  <button
    onClick={onClick}
    type={type}
    className={`${mainClassNames} ${className}`}
    disabled={disabled}
    {...others}
  >
    {children}
  </button>
  );
};

export default Button;
