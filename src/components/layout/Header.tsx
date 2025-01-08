import React from "react";
import { ModeToggle } from "./ModeToggle";
import { LanguageSelector } from "../LanguageSelector";
import { useTranslation } from "../../hooks/useTranslation";

export const Header = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <a 
          href="https://napoleon.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src="https://napoleon.com.br/wp-content/uploads/2023/08/Asset-2.svg"
            alt="Napoleon Logo"
            className="h-8 dark:hidden"
          />
          <img
            src="https://napoleon.com.br/wp-content/uploads/2023/08/Asset-4.svg"
            alt="Napoleon Logo"
            className="h-8 hidden dark:block"
          />
        </a>
        <div className="flex items-center gap-2">
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={changeLanguage}
          />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};