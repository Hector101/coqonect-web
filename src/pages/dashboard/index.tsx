import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Dashboard = dynamic(() => import('src/components/Dashboard'), {
  loading: () =>  <LoadingPage />,
});

const DashboardPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Dashboard | CoQonect">
      <Dashboard />
    </Plain>
  );
};


export default DashboardPage;
