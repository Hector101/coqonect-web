import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const NotificationsView = dynamic(() => import('src/components/AppLayout/NotificationsView'), {
  loading: () =>  <LoadingPage />,
});

const NotificationsPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <NotificationsView />
    </Plain>
  );
};

export default NotificationsPage;
