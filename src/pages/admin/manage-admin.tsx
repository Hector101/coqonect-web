import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const ManageAdmin = dynamic(() => import('src/components/Admin/ManageAdmin'), {
  loading: () =>  <LoadingPage />,
});

const AdminPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Admin Dashboard | CoQonect">
      <ManageAdmin />
    </Plain>
  );
};


export default AdminPage;
