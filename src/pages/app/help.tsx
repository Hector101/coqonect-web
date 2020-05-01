import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const HelpView = dynamic(() => import('src/components/AppLayout/HelpView'), {
  loading: () =>  <LoadingPage />,
});

const HelpPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Help | CoQonect">
      <HelpView />
    </Plain>
  );
};

export default HelpPage;
