import Blog from '@/pages/Blog';
import Test from '@/pages/Test';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import Lobby from '@/pages/Lobby';

const routes: RouteObject[] = [
  {
    // public routes
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { element: <Landing />, index: true },
      { element: <Home />, path: '/home' },
      { element: <Test />, path: '/test' },
      { element: <Blog />, path: '/blog' },
      { element: <Lobby />, path: '/lobby' },
      

      //   { action: handleLogin, element: <LoginForm />, path: '/login' },
      //            { path: "/signup", element: <SignupPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
