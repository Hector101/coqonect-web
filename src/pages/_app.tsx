import App from 'next/app';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

// lib
import { withApollo } from 'src/lib/withApollo';
import callApi from 'src/lib/callApi';

import '../styles/pages.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const DashboardContainer = dynamic(() => import('src/components/Containers/DashboardContainer'), {
  loading: () => <div className="w-100 vh-100 flex justify-center items-center">
   <SVG src="/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
  </div>,
});

class MyApp extends App {

  async componentDidMount() {
    const { router } = this.props;

    if (router.route.startsWith('/dashboard')) {

      const res = await callApi({
        url: '/api/v1/auth-status',
        method: 'get',
      });

      if (res.status !== 200) {
        router.push('/login');
      }
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
export default withRouter(withApollo(MyApp));
