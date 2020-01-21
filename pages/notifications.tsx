import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

// components
import Plain from 'components/Containers/Plain';

// lib
import redirect from 'lib/redirect';
import checkAuthStatus from 'lib/checkAuthStatus';

// interface
import INextFunctionalComponent from 'interfaces/NextFunctionalComponent';

const Notifications = dynamic(() => import('components/Dashboard/Notifications'), {
  loading: () =>  <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/static/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
  </div>,
});

const DashboardContainer = dynamic(() => import('components/Containers/DashboardContainer'), {
  loading: () => <div className="w-100 vh-100 flex justify-center items-center">
   <SVG src="/static/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
  </div>,
});

const DashboardPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <DashboardContainer>
        <Notifications />
      </DashboardContainer>
    </Plain>
  );
};

DashboardPage.getInitialProps = async (context: any) => {
  const { isAuthenticated } = await checkAuthStatus(context.apolloClient);

  if (!isAuthenticated) {
    redirect(context, '/login');
  }

  return { isAuthenticated };
};

export default DashboardPage;
