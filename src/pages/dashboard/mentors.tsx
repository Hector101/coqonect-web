import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

// components
import Plain from 'src/components/Containers/Plain';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Mentors = dynamic(() => import('src/components/Dashboard/Mentors'), {
  loading: () =>  <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
  </div>,
});

const MentorsPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <Mentors />
    </Plain>
  );
};

export default MentorsPage;
