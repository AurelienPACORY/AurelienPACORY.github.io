import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const toggleThemeLabel = t('navigation.toggle_theme');

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={toggleThemeLabel}
    >
      <span className="text-xl">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </Button>
  );
}
