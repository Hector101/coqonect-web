import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

// components
import Plain from 'src/components/Containers/Plain';

// interface
import INextFunctionalComponent from 'src/interfaces/NextFunctionalComponent';

const Profile = dynamic(() => import('src/components/Profile/Profile'), {
  loading: () =>  <div className="w-100 vh-100 flex justify-center items-center">
    <SVG src="/svgs/Loading.svg" className="w3 h3 c-LoadingPrimary" />
  </div>,
});

const DashboardPage: INextFunctionalComponent<{}> = () => {
  return (
    <Plain title="Profile | CoQonect">
      <Profile />
    </Plain>
  );
};

export default DashboardPage;
