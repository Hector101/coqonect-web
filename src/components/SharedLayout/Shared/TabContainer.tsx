import React, { FunctionComponent, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const TabContainer: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <section id={title}>
      {children}
    </section>
  );
};

export default TabContainer;
