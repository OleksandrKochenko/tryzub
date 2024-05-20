import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './elements/Header';
import { Footer } from './elements/Footer';

export const Layout = () => {
  return (
    <div>
      <header className="h-[15vh]">
        <Header />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};
