import { useTheme } from 'next-themes';
import { Button } from './Button';
import { Moon, Sun } from 'lucide-react';
import { HTMLAttributes } from 'react';

interface ThemeSwitcherProps extends HTMLAttributes<HTMLButtonElement> {}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
      className={className}
    >
      <Sun className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300
                      scale-100 rotate-0 opacity-100 pointer-events-auto
                      dark:scale-0 dark:-rotate-90 dark:opacity-0 dark:pointer-events-none" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300
                      scale-0 rotate-90 opacity-0 pointer-events-none
                      dark:scale-100 dark:rotate-0 dark:opacity-100 dark:pointer-events-auto" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
