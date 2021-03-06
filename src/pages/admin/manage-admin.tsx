import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const ManageAdminView = dynamic(() => import('src/components/AdminLayout/ManageAdminView'), {
  loading: () =>  <LoadingPage />,
});

const ManageAdminPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Manage Admin Dashboard | CoQonect">
      <ManageAdminView />
    </Plain>
  );
};


export default ManageAdminPage;
