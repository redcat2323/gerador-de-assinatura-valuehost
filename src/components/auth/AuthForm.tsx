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
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setErrorMessage("");
      }
      if (event === 'SIGNED_IN') {
        console.log('Successfully signed in:', session?.user?.email);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleError = (error: AuthError) => {
    console.error('Auth error:', error);
    switch (error.message) {
      case "Invalid login credentials":
        setErrorMessage("Email ou senha inválidos. Por favor, verifique suas credenciais.");
        break;
      case "User already registered":
        setErrorMessage("Este email já está registrado. Por favor, faça login.");
        break;
      case "Email not confirmed":
        setErrorMessage("Por favor, tente fazer login novamente.");
        break;
      default:
        setErrorMessage(error.message);
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
        onError={handleError}
        redirectTo={window.location.origin}
      />
    </Card>
  );
};

export default AuthForm;