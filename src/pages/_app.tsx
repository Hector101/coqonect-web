import { FunctionComponent } from 'react';
import App from 'next/app';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import { observer } from 'mobx-react-lite';

import LoadingPage from 'src/components/Shared/LoadingPage';
import CustomSnackbar from 'src/components/Shared/CustomSnackbar';

// lib
import { withApollo } from 'src/lib/withApollo';
import callApi from 'src/lib/callApi';

import { UserStore } from 'src/store/UserStore';

import '../styles/slick/slick.css';
import '../styles/slick/slick-theme.css';
import '../styles/tachyons.scss';
import '../styles/pages.scss';

type WithCustomSnackbarProps = {
  isDashboard: boolean;
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
};

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const DashboardContainer = dynamic(() => import('src/components/Containers/DashboardContainer'), {
  loading: () => <LoadingPage />,
});

const WithCustomSnackbar: FunctionComponent<WithCustomSnackbarProps> = ({ isDashboard, Component, pageProps }) => (
  <>
    {isDashboard
      ? (<DashboardContainer><Component {...pageProps} /></DashboardContainer>)
      : <Component {...pageProps} />
    }
    <CustomSnackbar />
  </>
);

class MyApp extends App {
  store: UserStore;

  constructor(props: any) {
    super(props);
    this.store = new UserStore(callApi);
  }

  async componentDidMount() {
    const { router } = this.props;

    if (router.route.startsWith('/dashboard')) {
      this.store.handleCheckAuthStatus(() => {
        // auth success
      }, () => {
        router.push('/login');
      });
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <WithCustomSnackbar
        isDashboard={router.route.startsWith('/dashboard')}
        Component={Component}
        pageProps={pageProps}
      />
    );
  }
}

// @ts-ignore
export default observer(withRouter(withApollo(MyApp)));
