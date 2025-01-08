import SignatureEditor from "@/components/SignatureEditor";
import { Header } from "@/components/layout/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <SignatureEditor />
      </main>
    </div>
  );
};

export default Index;