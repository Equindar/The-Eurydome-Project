import { Button } from '@/components/ui/button';
import ModeFrame from '@/components/ui/mode-frame';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Test = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  return (
    <>
      <div className="z-0 block h-max w-full bg-[url('/images/background.webp')] blur-sm"></div>
      <div className="z-10 blur-none">test</div>
      <Button onClick={() => {
        toast({
          title: "Toast Test",
          description: "This is the description",
        })}} />
        <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
      <ModeFrame name="Demo" description="current state of development" />
    </>
  );
};

export default Test;
