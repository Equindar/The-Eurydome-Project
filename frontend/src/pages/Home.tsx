import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="m-5 bg-cyan-400 p-4">Vite + React</h1>
      <img src="/images/test.jpg" width={300} />
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

export default Home;
