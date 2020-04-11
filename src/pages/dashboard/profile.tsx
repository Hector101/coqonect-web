import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Profile = dynamic(() => import('src/components/Profile'), {
  loading: () => <LoadingPage />,
});

const DashboardPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Profile | CoQonect">
      <Profile />
    </Plain>
  );
};

export default DashboardPage;
