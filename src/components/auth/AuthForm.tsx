import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "../ui/card";

const AuthForm = () => {
  return (
    <Card className="w-full max-w-md p-6 mx-auto">
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
        providers={[]}
        redirectTo={window.location.origin}
      />
    </Card>
  );
};

export default AuthForm;