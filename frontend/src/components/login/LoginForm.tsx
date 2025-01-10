import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';

function LoginForm() {
  return (
    <Card>
      <CardHeader>
      <CardTitle>Anmeldung</CardTitle>
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
