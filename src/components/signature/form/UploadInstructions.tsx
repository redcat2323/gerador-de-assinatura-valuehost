import React from "react";
import { Alert, AlertDescription } from "../../ui/alert";
import { Info } from "lucide-react";

export const UploadInstructions = ({ type }: { type: 'logo' | 'banner' }) => {
  const instructions = {
    logo: {
      title: "Instruções para o Logo:",
      items: [
        "Dimensão recomendada: 100-200px de largura",
        "Formato: PNG (preferencialmente) ou JPG",
        "Use fundo transparente (PNG) para melhor resultado",
        "Evite textos muito pequenos que possam ficar ilegíveis",
        "Resolução: 72-96 DPI"
      ]
    },
    banner: {
      title: "Instruções para o Banner:",
      items: [
        "Dimensão recomendada: 600px de largura",
        "Altura proporcional à largura",
        "Formato: JPG ou PNG",
        "Tamanho máximo: 1MB",
        "Evite textos muito pequenos"
      ]
    }
  };

  const content = instructions[type];

  return (
    <Alert className="mt-2">
      <Info className="h-4 w-4" />
      <AlertDescription>
        <p className="font-medium mb-1">{content.title}</p>
        <ul className="text-sm list-disc list-inside space-y-1">
          {content.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
};