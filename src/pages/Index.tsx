import SignatureEditor from "@/components/SignatureEditor";
import { Header } from "@/components/layout/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Gerador de Assinatura de E-mail
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Crie uma assinatura de e-mail profissional em poucos minutos. 
            Personalize modelos prontos com suas informações e estilo.
          </p>
        </div>
        <SignatureEditor />
      </main>
    </div>
  );
};

export default Index;