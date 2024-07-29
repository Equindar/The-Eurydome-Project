import LoginForm from '@/components/login/LoginForm';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-0 grid gap-4 md:grid-cols-2">
      <div></div>
      <section className="dark:bg-background-dark bg-background opacity-80 shadow dark:border dark:border-gray-700">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <img className="mr-2 h-8 w-8" src="images/logo-no-bg.png" alt="logo" />
          <h1>Sylvaria</h1>
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
