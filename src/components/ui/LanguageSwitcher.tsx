import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang.startsWith('fr') ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="font-semibold text-sm w-10 h-10"
      aria-label="Changer de langue"
    >
      {currentLang.startsWith('fr') ? 'EN' : 'FR'}
    </Button>
  );
}
