import { FunctionComponent, ChangeEvent } from 'react';
import classnames from 'classnames';

type Props = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className: string;
  containerClassName?: string;
  defaultType: 'textarea';
  customType?: 'textarea';
  name: string;
  placeholder: string;
  disabled?: boolean;
  error?: string;
  noBorders?: boolean;
  children: React.ReactElement;
};

const Textarea: FunctionComponent<Props> = ({
  onChange,
  className,
  containerClassName,
  disabled,
  name,
  value,
  error,
  placeholder,
  noBorders,
  children,
}) => {
  // const [toggleStatus, setToggleStatus] = useState(false);

  const inputClassName = classnames(`outline-transparent ${className}`, {
    'bn': noBorders,
    'ba b--black-20': !noBorders,
  });
  const inputContainerClassName = classnames('relative', {
    [`${containerClassName}`]: !!containerClassName,
  });

  const readOnly = onChange ? false : true;

  return (

    <div className={inputContainerClassName}>
      <textarea
        className={inputClassName}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      >
        {children}
      </textarea>  
      {error && <label className="light-red f6 mt1">{error}</label>}
    </div>
  );
};


export default Textarea;
