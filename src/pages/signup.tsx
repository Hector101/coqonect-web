import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

// Components
import Plain from 'src/components/Containers/Plain';

const Signup = dynamic(() => import('src/components/Signup'), {
  loading: () =>  <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/svgs/Loading.svg" className="w4 h4 c-LoadingPrimary" />
  </div>,
});

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

type Props = {
  isAuthenticated?: boolean;
};

const SignupPage: INextFunctionalComponent<Props> = () => {
  return (
    <Plain title="Signup | CoQonect">
      <Signup />
    </Plain>
  );
};

export default SignupPage;
