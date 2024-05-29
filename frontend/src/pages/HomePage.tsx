import reactLogo from '@/assets/react.svg';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-100 max-h-100 m-5">
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank"></a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1 className="m-5 bg-cyan-400 p-4">Vite + React</h1>
      <div className="card bg-slate-400">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and {}save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Button variant="outline">Button</Button>
    </>
  );
};

export default HomePage;
