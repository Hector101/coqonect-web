import dynamic from 'next/dynamic';

// components
import Plain from 'src/components/SharedLayout/Containers/Plain';
import LoadingPage from 'src/components/SharedLayout/Shared/LoadingPage';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const CurricullumView = dynamic(() => import('src/components/AppLayout/CurricullumView'), {
  loading: () =>  <LoadingPage />,
});

const CurricullumPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Currucullums | CoQonect">
      <CurricullumView />
    </Plain>
  );
};


export default CurricullumPage;
