import { FunctionComponent } from 'react';
import App from 'next/app';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import NoSsr from '@material-ui/core/NoSsr';
import CssBaseline from '@material-ui/core/CssBaseline';

import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';
import CustomSnackbar from 'src/components/SharedLayout/Shared/CustomSnackbar';

// lib
import { withApollo } from 'src/lib/withApollo';

import 'rc-dialog/assets/index.css';
import '../styles/slick/slick.css';
import '../styles/slick/slick-theme.css';
import '../styles/tachyons.scss';
import '../styles/pages.scss';

type WithCustomSnackbarProps = {
  isDashboard: boolean;
  isAdminDashboard: boolean;
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
};

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const DashboardContainer = dynamic(() => import('src/components/SharedLayout/Containers/DashboardContainer'), {
  loading: () => <LoadingPage />,
});

const AdminDashboardContainer = dynamic(() => {
    return import('src/components/SharedLayout/Containers/AdminDashboardContainer');
  },
  {
    loading: () => <LoadingPage />,
  },
);

const WithCustomSnackbar: FunctionComponent<WithCustomSnackbarProps> = ({
  isDashboard,
  isAdminDashboard,
  Component,
  pageProps,
}) => (
  <NoSsr>
    {isDashboard
      ? (<DashboardContainer><Component {...pageProps} /></DashboardContainer>)
      : isAdminDashboard
      ? (<AdminDashboardContainer><Component {...pageProps} /></AdminDashboardContainer>)
      : <Component {...pageProps} />
    }
    <CssBaseline />
    <CustomSnackbar />
  </NoSsr>
);

// @ts-ignore
@withRouter
// @ts-ignore
@withApollo
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <WithCustomSnackbar
        isDashboard={router.route.startsWith('/app')}
        isAdminDashboard={router.route.startsWith('/admin')}
        Component={Component}
        pageProps={pageProps}
      />
    );
  }
}

export default MyApp;
