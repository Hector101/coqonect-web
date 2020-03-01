import dynamic from 'next/dynamic';

// Components
import Plain from 'src/components/Containers/Plain';
import LoadingPage from 'src/components/Shared/LoadingPage';

const Signup = dynamic(() => import('src/components/Signup'), {
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
      <Signup />
    </Plain>
  );
};

export default SignupPage;
