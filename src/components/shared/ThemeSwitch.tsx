'use client';

import { MoonIcon, SunMediumIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import React from 'react';
import { Button } from '../ui/button';

const ThemeSwitch: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    startThemeTransition(200);
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon" aria-label={`Switch theme mode`}>
      <SunMediumIcon className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Switch theme</span>
    </Button>
  );
};

export default ThemeSwitch;

// mounting theme transition class and removing it after duration
export function startThemeTransition(duration = 400) {
  const root = document.documentElement;
  root.classList.add('theme-transition');
  window.setTimeout(() => {
    root.classList.remove('theme-transition');
  }, duration);
}
