import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import PageNotFound from '../pages/PageNotFound';

const router = createBrowserRouter([
  {
    children: [
      { element: <LandingPage />, index: true },
      //   { action: handleLogin, element: <LoginForm />, path: '/login' },
      //            { path: "/signup", element: <SignupPage /> },
    ],
    // public routes
    // element: <Layout theme={customTheme} />,
    errorElement: <PageNotFound />,
  },
  // restricted routes
  { element: <HomePage />, path: '/home' },
]);

export default router;
