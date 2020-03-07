import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const ActiveSession = dynamic(() => import('src/components/ActiveSession'), {
  loading: () =>  <LoadingPage />,
});

const ActiveSessionPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <ActiveSession />
    </Plain>
  );
};

export default ActiveSessionPage;
