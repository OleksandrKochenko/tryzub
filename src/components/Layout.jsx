import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './elements/Header';
// import { Footer } from './elements/Footer';
import logo from '../img/logo_test.jpg';

export const Layout = () => {
  const vw = window.innerWidth;

  return vw <= 1100 ? (
    <div className="w-full flex flex-col items-center">
      <img src={logo} alt="UCA Tryzub" width={260} />
      <p className="my-2 animate-pulse text-red-500 font-semibold text-xl">
        Mobile version coming soon!
      </p>
    </div>
  ) : (
    <div>
      <header className="h-[15vh]">
        <Header />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};
