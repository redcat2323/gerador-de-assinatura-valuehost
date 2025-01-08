import { useEffect, useState, createContext, useContext } from "react";
import { translations, Language, TranslationKey } from "../i18n/translations";
import { supabase } from "../integrations/supabase/client";

type TranslationContextType = {
  t: (key: TranslationKey) => string;
  language: Language;
  changeLanguage: (language: Language) => Promise<void>;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt-BR");

  useEffect(() => {
    const loadUserLanguage = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: settings } = await supabase
            .from("user_settings")
            .select("language")
            .eq("user_id", user.id)
            .single();

          if (settings?.language) {
            console.log("Setting language from DB:", settings.language);
            setLanguage(settings.language as Language);
          } else {
            const browserLanguage = navigator.language;
            const defaultLanguage = browserLanguage.startsWith("pt") ? "pt-BR" : "en-US";
            setLanguage(defaultLanguage);
            
            await supabase
              .from("user_settings")
              .upsert({
                user_id: user.id,
                language: defaultLanguage,
              });
          }
        } else {
          const browserLanguage = navigator.language;
          const defaultLanguage = browserLanguage.startsWith("pt") ? "pt-BR" : "en-US";
          setLanguage(defaultLanguage);
        }
      } catch (error) {
        console.error("Error loading language:", error);
      }
    };

    loadUserLanguage();
  }, []);

  const t = (key: TranslationKey): string => {
    console.log("Current language:", language);
    console.log("Translating key:", key);
    
    if (!translations[language]?.[key]) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return translations["en-US"][key] || key;
    }
    return translations[language][key];
  };

  const changeLanguage = async (newLanguage: Language) => {
    console.log("Changing language to:", newLanguage);
    
    setLanguage(newLanguage);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase
          .from("user_settings")
          .upsert({
            user_id: user.id,
            language: newLanguage,
          });
      }
    } catch (error) {
      console.error("Error saving language:", error);
    }
  };

  return (
    <TranslationContext.Provider value={{ t, language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};