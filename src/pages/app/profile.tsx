import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const ProfileView = dynamic(() => import('src/components/AppLayout/ProfileView'), {
  loading: () => <LoadingPage />,
});

const ProfilePage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Profile | CoQonect">
      <ProfileView />
    </Plain>
  );
};

export default ProfilePage;
