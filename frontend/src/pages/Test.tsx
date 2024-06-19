import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ModeFrame from '@/components/ui/mode-frame';
import { useTranslation } from 'react-i18next';

const Test = () => {
  const { t } = useTranslation();

  return (
    <>
      <ModeFrame name="Demo" description="current state of development" />
      <div className="z-10 flex h-screen items-center justify-center p-10 blur-none">
        <Card className="">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Test;
