import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

// components
import Plain from 'src/components/Containers/Plain';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const ActiveSession = dynamic(() => import('src/components/Dashboard/ActiveSession'), {
  loading: () =>  <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
  </div>,
});

const ActiveSessionPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <ActiveSession />
    </Plain>
  );
};

export default ActiveSessionPage;
