import SignatureEditor from "@/components/SignatureEditor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-primary">Email Signature Generator</h1>
        </div>
      </header>
      <main className="py-8">
        <SignatureEditor />
      </main>
    </div>
  );
};

export default Index;