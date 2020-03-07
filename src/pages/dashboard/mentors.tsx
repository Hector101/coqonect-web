import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Mentors = dynamic(() => import('src/components/FeaturedMentors'), {
  loading: () =>  <LoadingPage />,
});

const MentorsPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <Mentors />
    </Plain>
  );
};

export default MentorsPage;
