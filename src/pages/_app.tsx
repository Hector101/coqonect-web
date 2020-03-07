import App from 'next/app';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { observer } from 'mobx-react-lite';

import LoadingPage from 'src/components/Shared/LoadingPage';

// lib
import { withApollo } from 'src/lib/withApollo';
import callApi from 'src/lib/callApi';

import { UserStore } from 'src/store/UserStore';

import '../styles/pages.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const DashboardContainer = dynamic(() => import('src/components/Containers/DashboardContainer'), {
  loading: () => <LoadingPage />,
});

class MyApp extends App {
  store: UserStore;

  constructor(props: any) {
    super(props);
    this.store = new UserStore(callApi);
  }

  async componentDidMount() {
    const { router } = this.props;

    if (router.route.startsWith('/dashboard')) {
      this.store.handleCheckAuthStatus();
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    if (router.route.startsWith('/dashboard')) {
      return (
        <DashboardContainer>
          <Component {...pageProps} />
        </DashboardContainer>
      );
    }
    return (
      <Component {...pageProps} />
    );
  }
}

// @ts-ignore
export default observer(withRouter(withApollo(MyApp)));
