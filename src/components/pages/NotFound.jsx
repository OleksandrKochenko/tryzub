import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-[lightgrey] absolute top-0 left-0 flex flex-col justify-center items-center">
      <h1 className="text-[180px] font-semibold m-0">404</h1>
      <p className="text-xl bg-red-400 p-2  fixed top-[calc(1/2-20px)] left-[calc(1/2-20px)] rotate-12">
        Page Not Found
      </p>
      <NavLink to={'/'} className="hover:underline">
        Try again
      </NavLink>
    </div>
  );
};
