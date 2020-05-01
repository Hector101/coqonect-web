import { FunctionComponent, useState, ChangeEvent } from 'react';
import classnames from 'classnames';
import { RenderSVG } from 'src/components/SharedLayout/Shared/SVGS';

type InputTypes = 'text' | 'email' | 'password' | 'search' | 'textarea' | 'number';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
  mainClassName?: string;
  containerClassName?: string;
  defaultType: InputTypes;
  customType?: InputTypes;
  name: string;
  placeholder: string;
  disabled?: boolean;
  leftIconName?: string;
  defaultRightIconName?: string;
  customRightIconName?: string;
  error?: string;
  errorWithBorder?: boolean;
  noBorders?: boolean;
  autoComplete?: 'on' | 'off';
  size?: 'small' | 'medium' | 'large';
  min?: number;
  max?: number;
};

const Input: FunctionComponent<Props> = ({
  onChange,
  className,
  containerClassName,
  disabled,
  defaultType,
  customType,
  name,
  leftIconName,
  defaultRightIconName,
  customRightIconName,
  value,
  error,
  errorWithBorder,
  placeholder,
  noBorders,
  mainClassName,
  size = 'large',
  ...rest
}) => {
  const [toggleStatus, setToggleStatus] = useState(false);

  const inputClassName = classnames(`outline-transparent ${className}`, {
    'bn': noBorders,
    'ba b--black-20': !noBorders,
    'c-with-left-icon': leftIconName,
    'ba b--red': errorWithBorder && error,
  });
  const inputContainerClassName = classnames('relative c-Input', {
    [`${containerClassName}`]: !!containerClassName,
    small: size === 'small',
    medium: size === 'medium',
    large: size === 'large',
  });

  const textAreaClassName = classnames(mainClassName, {
    'ba b--red': errorWithBorder && error,
  });

  const _changeInputType = () => {
    setToggleStatus(!toggleStatus);
  };

  const rightIcon = toggleStatus ? customRightIconName : defaultRightIconName;
  const currentType = toggleStatus ? customType : defaultType;
  const readOnly = onChange ? false : true;

  if (defaultType === 'textarea') {
    return (
      <div className={className}>
        <textarea
          className={textAreaClassName}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
        {error && !errorWithBorder && <label className="light-red f6 mt1">{error}</label>}
      </div>
    );
  }

  return (
    <div className={inputContainerClassName}>
      {leftIconName && <RenderSVG name={leftIconName} className="w1 h1 absolute left-1 top-1" />}
      <input
        className={inputClassName}
        type={currentType}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />

      {
        rightIcon ? (
          <div onClick={_changeInputType} className="w1 h1 pointer absolute right-1 top-1">
            <RenderSVG name={rightIcon} className="w1 h1" />
          </div>
        ) : null
      }
      {error && !errorWithBorder && <label className="light-red f6 mt1">{error}</label>}
    </div>
  );
};


export default Input;
