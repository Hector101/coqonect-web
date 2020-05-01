import dynamic from 'next/dynamic';

// Components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

const SignupView = dynamic(() => import('src/components/AuthLayout/SignupView'), {
  loading: () =>  <LoadingPage />,
});

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

type Props = {
  isAuthenticated?: boolean;
};

const SignupPage: INextFunctionalComponent<Props> = () => {
  return (
    <Plain title="Signup | CoQonect">
      <SignupView />
    </Plain>
  );
};

export default SignupPage;
