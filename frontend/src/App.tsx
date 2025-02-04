import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import router from './routes/router';
import './lib/i18n';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback="...is loading">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
