import { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title: string;
};

const Plain: FunctionComponent<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export default Plain;
