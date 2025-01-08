import { useEffect, useState } from "react";
import { translations, Language, TranslationKey } from "../i18n/translations";
import { supabase } from "../integrations/supabase/client";

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>("pt-BR");

  useEffect(() => {
    const loadUserLanguage = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: settings } = await supabase
          .from("user_settings")
          .select("language")
          .eq("user_id", user.id)
          .single();

        if (settings?.language) {
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
    };

    loadUserLanguage();
  }, []);

  const t = (key: TranslationKey): string => {
    if (!translations[language]?.[key]) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return translations["en-US"][key] || key;
    }
    return translations[language][key];
  };

  const changeLanguage = async (newLanguage: Language) => {
    setLanguage(newLanguage); // Atualiza o estado imediatamente
    
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase
        .from("user_settings")
        .upsert({
          user_id: user.id,
          language: newLanguage,
        });
    }
  };

  return { t, language, changeLanguage };
};