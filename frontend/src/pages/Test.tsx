import CharacterWidget from '@/components/character/CharacterWidget';
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
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';

const Test = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  return (
    <>
      <LocationBanner
        title="Verborgener Wald"
        subtitle="Hier sind so einige verloren gegangen. Pass auf dich auf..."
      />

      <div className="z-10 flex h-screen items-center justify-center p-10 blur-none">
        <Card className=" bg-background text-black">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
        <MessageCircle className="dark:text-white text-black h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          </CardFooter>
        </Card>
        <QuestWidget />
        <CharacterWidget />
      </div>
    </>
  );
};

export default Test;
