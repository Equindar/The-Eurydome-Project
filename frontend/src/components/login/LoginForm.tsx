import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { useTranslation } from 'react-i18next';

function LoginForm() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
      <CardTitle>{t('login.title', {ns: 'common'})}</CardTitle>
      <CardDescription>Melde dich an und leg los.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Kennwort eingeben" />
      </CardContent>
      <CardFooter className="flex justify-center">
      <Button>Login</Button>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;
