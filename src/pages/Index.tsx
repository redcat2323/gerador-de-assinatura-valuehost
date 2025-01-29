import SignatureEditor from "@/components/SignatureEditor";
import { Header } from "@/components/layout/Header";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-4 sm:py-8">
        <div className="container mx-auto px-4 mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Gerador de Assinatura de E-mail
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
            {t("pageSubtitle")}
          </p>
        </div>
        <SignatureEditor />
      </main>
    </div>
  );
};

export default Index;