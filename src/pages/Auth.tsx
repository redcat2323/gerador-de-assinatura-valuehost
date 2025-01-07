import AuthForm from "@/components/auth/AuthForm";

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Email Signature Generator</h1>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;