import SignatureEditor from "@/components/SignatureEditor";
import { Header } from "@/components/layout/Header";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {t("pageSubtitle")}
          </p>
        </div>
        <SignatureEditor />
      </main>
    </div>
  );
};

export default Index;