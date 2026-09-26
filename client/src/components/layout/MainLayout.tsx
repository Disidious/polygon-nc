import { Outlet } from 'react-router';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { useRouteMetadata } from '@/hooks/usePageMetadata';

function MainLayout() {
  useRouteMetadata();

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
