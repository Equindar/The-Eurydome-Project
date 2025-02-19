import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

function RegistrationForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Registrierung</CardTitle>
        <CardDescription>Melde dich an und leg los.</CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="email">E-Mail Adresse</Label>
        <Input type="email" placeholder="name@provider.de" />
        <Label htmlFor="password">Kennwort</Label>
        <Input type="password" placeholder="Kennwort eingeben" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={'default'}>Account erstellen</Button>
        <Button variant={'ghost'}>zurücksetzen</Button>
      </CardFooter>
    </Card>
  );
}

export default RegistrationForm;
