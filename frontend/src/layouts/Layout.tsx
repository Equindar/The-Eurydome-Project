import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="relative h-full min-w-full">
      <div
        id="background"
        className="-z-1 absolute h-full min-w-full bg-[url('/images/background.webp')] bg-cover blur-sm"
      >
        test
      </div>

      <div className="relative z-0 grid grid-cols-2 gap-4">
        <div className="">
          <h1>Layout</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
