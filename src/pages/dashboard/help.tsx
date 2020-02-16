import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

// components
import Plain from 'src/components/Containers/Plain';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Help = dynamic(() => import('src/components/Dashboard/Help'), {
  loading: () =>  <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
  </div>,
});

const HelpPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Active Session | CoQonect">
      <Help />
    </Plain>
  );
};

export default HelpPage;
