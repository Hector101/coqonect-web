import React from 'react';
import { getDataFromTree } from '@apollo/react-ssr';
import Head from 'next/head';

// lib
import initApollo from 'lib/initApollo';

export default (App: any) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`;

    static defaultProps = {
      apolloState: {},
    };

    static async getInitialProps(ctx: any) {
      const { AppTree, ctx: { res, req } } = ctx;
      const apolloClient = initApollo({}, { headers: req?.headers });

      ctx.ctx.apolloClient = apolloClient;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res?.finished) {
        return {};
      }

      if (typeof window === 'undefined') {
        try {
          await getDataFromTree(<AppTree {...appProps} apolloClient={apolloClient} />);
        } catch (error) {
          console.error('Error while running `getDataFromTree`', error);
        }

        Head.rewind();
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    constructor(props: any) {
      super(props);
      // @ts-ignore APOLLO
      this.apolloClient = initApollo(props.apolloState, {});
    }

    render() {
      // @ts-ignore APOLLO
      return <App apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};
