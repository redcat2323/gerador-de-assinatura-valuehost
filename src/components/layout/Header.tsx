import React from "react";
import { ModeToggle } from "./ModeToggle";
import { LanguageSelector } from "../LanguageSelector";
import { useTranslation } from "../../hooks/useTranslation";

export const Header = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="Logo" className="w-6 h-6" />
          <span className="font-semibold">Email Signature</span>
        </div>
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