import BlogPage from '@/pages/BlogPage';
import Canvas from '@/pages/Canvas';
import Inventory from '@/pages/Inventory';
import Lobby from '@/pages/Lobby';
import Test from '@/pages/Test';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';

const routes: RouteObject[] = [
  {
    // public routes
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { element: <LandingPage />, index: true },
      { element: <HomePage />, path: '/home' },
      { element: <Test />, path: '/test' },
      { element: <BlogPage />, path: '/blog' },
      { element: <Lobby />, path: '/lobby' },
      { element: <Inventory />, path: '/inventory' },
      { element: <Canvas />, path: '/canvas' },

      //   { action: handleLogin, element: <LoginForm />, path: '/login' },
      //            { path: "/signup", element: <SignupPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
