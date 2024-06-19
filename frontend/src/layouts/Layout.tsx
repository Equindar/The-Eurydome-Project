import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="relative h-full min-w-full">
      <div
        id="background"
        className="-z-1 absolute h-full min-w-full bg-[url('/images/background.webp')] bg-cover blur-sm"
      ></div>
      <Outlet />
    </div>
  );
};

export default Layout;
