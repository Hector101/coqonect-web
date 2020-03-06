import { FunctionComponent, ChangeEvent } from 'react';
import classnames from 'classnames';

type Props = {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  className: string;
  containerClassName?: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
  error?: string;
  noBorders?: boolean;
  value: string | null;
};

const TextArea: FunctionComponent<Props> = ({
  onChange,
  className,
  containerClassName,
  disabled,
  name,
  value,
  error,
  placeholder,
  noBorders,
}) => {

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
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={value || undefined}
      />
      {error && <label className="light-red f6 mt1">{error}</label>}
    </div>
  );
};


export default TextArea;
