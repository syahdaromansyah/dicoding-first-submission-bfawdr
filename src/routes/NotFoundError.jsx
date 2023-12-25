import { useLocation } from 'react-router-dom';
import notFoundSvg from '../assets/not-found-illustration.svg';
import PageLayout from '../components/PageLayout.jsx';
import RootPageLayout from './_route-components/RootPageLayout.jsx';

export default function NotFoundErrorRoute() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <PageLayout>
      <RootPageLayout>
        {pathName && (
          <div className="flex h-full flex-col items-center justify-center gap-y-6">
            <img
              src={notFoundSvg}
              className="block w-60 lg:w-96"
              alt="Page is not found"
            />

            <div className="max-w-xs md:max-w-md">
              <p className="mx-auto w-full break-words rounded bg-blue-200 px-3 py-1 text-center text-sm lg:text-base">
                Oops! Route{' '}
                <span className="font-semibold">&quot;{pathName}&quot;</span> is
                not found
              </p>
            </div>
          </div>
        )}
      </RootPageLayout>
    </PageLayout>
  );
}
