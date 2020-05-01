import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const DashboardView = dynamic(() => import('src/components/AppLayout/DashboardView'), {
  loading: () =>  <LoadingPage />,
});

const DashboardPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Dashboard | CoQonect">
      <DashboardView />
    </Plain>
  );
};


export default DashboardPage;
