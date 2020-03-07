import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Notifications = dynamic(() => import('src/components/Notifications'), {
  loading: () =>  <LoadingPage />,
});

const NotificationsPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <Notifications />
    </Plain>
  );
};

export default NotificationsPage;
