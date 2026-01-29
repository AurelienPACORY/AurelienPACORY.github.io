import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage}>
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle Language</span>
    </Button>
  );
}
