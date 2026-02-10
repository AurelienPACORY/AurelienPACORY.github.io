import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang.startsWith('fr') ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="font-semibold text-sm"
      aria-label={t('navigation.change_language')}
    >
      {currentLang.startsWith('fr') ? 'EN' : 'FR'}
    </Button>
  );
}
