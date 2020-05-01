import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const MentorsView = dynamic(() => import('src/components/AppLayout/MentorsView'), {
  loading: () =>  <LoadingPage />,
});

const MentorsPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <MentorsView />
    </Plain>
  );
};

export default MentorsPage;
