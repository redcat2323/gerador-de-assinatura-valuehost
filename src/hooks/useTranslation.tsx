import { useEffect, useState } from "react";
import { translations, Language, TranslationKey } from "../i18n/translations";
import { supabase } from "../integrations/supabase/client";

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>("en-US");

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
          // Se o usuário não tiver configurações salvas, use o idioma do navegador
          const browserLanguage = navigator.language;
          const defaultLanguage = browserLanguage.startsWith("pt") ? "pt-BR" : "en-US";
          setLanguage(defaultLanguage);
          
          // Salva a preferência de idioma do usuário
          if (user) {
            await supabase
              .from("user_settings")
              .upsert({
                user_id: user.id,
                language: defaultLanguage,
              });
          }
        }
      } else {
        // Se não houver usuário logado, use o idioma do navegador
        const browserLanguage = navigator.language;
        const defaultLanguage = browserLanguage.startsWith("pt") ? "pt-BR" : "en-US";
        setLanguage(defaultLanguage);
      }
    };

    loadUserLanguage();
  }, []);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations["en-US"][key];
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