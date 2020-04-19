import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Admin = dynamic(() => import('src/components/Admin'), {
  loading: () =>  <LoadingPage />,
});

const AdminPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Admin Dashboard | CoQonect">
      <Admin />
    </Plain>
  );
};


export default AdminPage;
