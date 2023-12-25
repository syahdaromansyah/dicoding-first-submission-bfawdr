import { Outlet } from 'react-router-dom';
import PageLayout from '../components/PageLayout.jsx';
import RootPageLayout from './_route-components/RootPageLayout.jsx';

export default function RootRoute() {
  return (
    <PageLayout>
      <RootPageLayout>
        <Outlet />
      </RootPageLayout>
    </PageLayout>
  );
}
