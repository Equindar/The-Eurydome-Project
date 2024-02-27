import { useTranslation } from '@/lib/i18n';
import LanguageSelect from '../language/LanguageSelect';

interface FooterProps {
  lng: string;
}

const Footer = async (props: FooterProps) => {
  const { t } = await useTranslation(props.lng);
  return (
    <div className="mx-auto max-w-6xl px-4">
      <LanguageSelect />
    </div>
  );
};

export default Footer;
