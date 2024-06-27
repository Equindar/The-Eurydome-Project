import './assets/globals.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { Toaster } from './components/ui/toaster';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (

<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
</ThemeProvider>

  );
}

export default App;
