import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const ReviewSkillsView = dynamic(() => import('src/components/AdminLayout/ReviewSkillsView'), {
  loading: () =>  <LoadingPage />,
});

const ReviewSkillsPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Review Skills Dashboard | CoQonect">
      <ReviewSkillsView />
    </Plain>
  );
};


export default ReviewSkillsPage;
