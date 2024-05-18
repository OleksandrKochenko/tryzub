import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './elements/Header';

export const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
};
