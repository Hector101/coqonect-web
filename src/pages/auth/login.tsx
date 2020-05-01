import dynamic from 'next/dynamic';

// Components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

const LoginView = dynamic(() => import('src/components/AuthLayout/LoginView'), {
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
      <LoginView />
    </Plain>
  );
};

export default LoginPage;
