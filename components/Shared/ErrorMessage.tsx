import { FunctionComponent } from 'react';

type Props = {
  message: string;
};

const ErrorMessage: FunctionComponent<Props> = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="w-100 w-50-m w-40-l pv3 ph4 tc ba b--light-red light-red">{message}</div>
  );
};

export default ErrorMessage;
