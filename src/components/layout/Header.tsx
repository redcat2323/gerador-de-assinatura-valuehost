import React from "react";
import { ModeToggle } from "./ModeToggle";
import { LanguageSelector } from "../LanguageSelector";
import { useTranslation } from "../../hooks/useTranslation";
import { ScrollingBanner } from "./ScrollingBanner";

export const Header = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <a 
          href="https://www.valuehost.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src="https://www.valuehost.com.br/assets/svg/logo/logo.svg"
            alt="ValueHost Logo"
            className="h-8"
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
      <ScrollingBanner />
    </header>
  );
};