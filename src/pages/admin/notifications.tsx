import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Notifications = dynamic(() => import('src/components/Admin/Notifications'), {
  loading: () =>  <LoadingPage />,
});

const AdminPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Admin Dashboard | CoQonect">
      <Notifications />
    </Plain>
  );
};


export default AdminPage;
