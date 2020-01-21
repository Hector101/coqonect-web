import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

// Components
import Plain from 'components/Containers/Plain';

const Login = dynamic(() => import('components/Login'), {
  loading: () =>  <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/static/svgs/Loading.svg" className="w4 h4 c-LoadingPrimary" />
  </div>,
});

// interface
import INextFunctionalComponent from 'interfaces/NextFunctionalComponent';

type Props = {
  isAuthenticated?: boolean;
};

const LoginPage: INextFunctionalComponent<Props> = () => {
  return (
    <Plain title="Login | CoQonect">
      <Login />
    </Plain>
  );
};

export default LoginPage;
