import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Email Signature Generator</h1>
        {user && (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user.email}</span>
            <Button variant="outline" onClick={signOut}>
              Sair
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;