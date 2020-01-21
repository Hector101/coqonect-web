import { FunctionComponent, useState, ChangeEvent } from 'react';
import classnames from 'classnames';
import { RenderSVG } from 'components/Shared/SVGS';

type InputTypes = 'text' | 'email' | 'password' | 'search';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
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
  noBorders?: boolean;
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
  placeholder,
  noBorders,
}) => {
  const [toggleStatus, setToggleStatus] = useState(false);

  const inputClassName = classnames(`c-Input outline-transparent ${className}`, {
    'bn': noBorders,
    'ba b--black-20': !noBorders,
  });
  const inputContainerClassName = classnames('relative', {
    [`${containerClassName}`]: !!containerClassName,
  });

  const _changeInputType = () => {
    setToggleStatus(!toggleStatus);
  };

  const rightIcon = toggleStatus ? customRightIconName : defaultRightIconName;
  const currentType = toggleStatus ? customType : defaultType;
  const readOnly = onChange ? false : true;

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
      />

      <div onClick={_changeInputType}>
        {rightIcon && <RenderSVG name={rightIcon} className="w1 h1 absolute right-1 top-1 pointer" />}
      </div>
      {error && <label className="light-red f6 mt1">{error}</label>}
    </div>
  );
};


export default Input;
