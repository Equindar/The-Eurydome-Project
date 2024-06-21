import QuestWidget from '@/components/quests/QuestWidget';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import LocationBanner from '@/components/ui/location-banner';
import ModeFrame from '@/components/ui/mode-frame';
import { useTranslation } from 'react-i18next';

const Test = () => {
  const { t } = useTranslation();

  return (
    <>
      <ModeFrame name="Demo" description="current state of development" />
      <LocationBanner
        title="Verborgener Wald"
        subtitle="Hier sind so einige verloren gegangen. Pass auf dich auf..."
      />
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
        <QuestWidget />
      </div>
    </>
  );
};

export default Test;
