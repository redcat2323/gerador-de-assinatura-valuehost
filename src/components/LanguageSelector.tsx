import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Languages } from "lucide-react";
import { Language } from "../i18n/translations";

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageSelector = ({
  currentLanguage,
  onLanguageChange,
}: LanguageSelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => onLanguageChange("pt-BR")}
          className={currentLanguage === "pt-BR" ? "bg-accent" : ""}
        >
          Português (BR)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onLanguageChange("en-US")}
          className={currentLanguage === "en-US" ? "bg-accent" : ""}
        >
          English (US)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};