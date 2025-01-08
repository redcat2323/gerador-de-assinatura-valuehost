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
        }
      }
    };

    loadUserLanguage();
  }, []);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations["pt-BR"][key];
  };

  const changeLanguage = async (newLanguage: Language) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase
        .from("user_settings")
        .upsert({
          user_id: user.id,
          language: newLanguage,
        });
    }
    setLanguage(newLanguage);
  };

  return { t, language, changeLanguage };
};