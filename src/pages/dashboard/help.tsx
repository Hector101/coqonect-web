import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Help = dynamic(() => import('src/components/Help/Help'), {
  loading: () =>  <LoadingPage />,
});

const HelpPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <Help />
    </Plain>
  );
};

export default HelpPage;
