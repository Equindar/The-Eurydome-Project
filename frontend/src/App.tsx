import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Suspense } from 'react';
import router from './routes/router';
import './lib/i18n';

function App() {
  return (
    <Suspense>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
    </Suspense>
  );
}

export default App;
