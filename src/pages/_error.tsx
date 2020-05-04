import NextError from 'next/error';
import { NextPageContext } from 'next';

type Props = {
  statusCode: number;
};

function Error({ statusCode }: Props) {
  return <NextError statusCode={statusCode} />;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
