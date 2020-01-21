import App from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/react-hooks';

// lib
import withApollo from 'lib/withApollo';

import '../styles/pages.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  static displayName = 'MyApp';

  render() {
    // @ts-ignore APOLLO
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
