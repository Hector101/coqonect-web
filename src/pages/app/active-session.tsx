import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const ActiveSessionView = dynamic(() => import('src/components/AppLayout/ActiveSessionView'), {
  loading: () =>  <LoadingPage />,
});

const ActiveSessionPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <ActiveSessionView />
    </Plain>
  );
};

export default ActiveSessionPage;
