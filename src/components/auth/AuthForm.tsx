import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "../ui/card";
import { Alert, AlertDescription } from "../ui/alert";
import { useEffect, useState } from "react";
import { AuthError } from "@supabase/supabase-js";

const AuthForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        setErrorMessage("");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const getErrorMessage = (error: AuthError) => {
    switch (error.message) {
      case "Invalid login credentials":
        return "Email ou senha inválidos. Por favor, verifique suas credenciais ou crie uma nova conta.";
      case "User already registered":
        return "Este email já está registrado. Por favor, faça login.";
      case "Email not confirmed":
        return "Por favor, confirme seu email antes de fazer login. Verifique sua caixa de entrada.";
      default:
        return error.message;
    }
  };

  return (
    <Card className="w-full max-w-md p-6 mx-auto">
      {errorMessage && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#2563eb',
                brandAccent: '#1d4ed8',
              },
            },
          },
        }}
        localization={{
          variables: {
            sign_in: {
              email_label: 'Email',
              password_label: 'Senha',
              button_label: 'Entrar',
            },
            sign_up: {
              email_label: 'Email',
              password_label: 'Senha',
              button_label: 'Criar conta',
            },
          },
        }}
        providers={[]}
        redirectTo={window.location.origin}
      />
    </Card>
  );
};

export default AuthForm;