import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LazyLoadPage from 'src/components/Profile/LazyLoadPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Profile = dynamic(() => import('src/components/Profile'), {
  loading: () => <LazyLoadPage />,
});

const DashboardPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Profile | CoQonect">
      <Profile />
    </Plain>
  );
};

export default DashboardPage;
