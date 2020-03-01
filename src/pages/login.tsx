import dynamic from 'next/dynamic';

// Components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

const Login = dynamic(() => import('src/components/Login'), {
  loading: () =>  <LoadingPage />,
});

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

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
