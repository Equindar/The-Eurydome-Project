import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';

function LoginForm() {
  const { t } = useTranslation(['main']);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('login.title')}</CardTitle>
        <CardDescription>{t('login.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Input type="email" placeholder={t('login.form-email')} />
        <Input type="password" placeholder={t('login.form-password')} />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Login</Button>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;
