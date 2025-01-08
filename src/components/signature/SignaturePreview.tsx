import React from "react";
import { SignatureData } from "./types";
import { ClassicTemplate } from "./templates/ClassicTemplate";
import { ModernTemplate } from "./templates/ModernTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";

interface SignaturePreviewProps {
  signatureData: SignatureData;
}

export const SignaturePreview = ({ signatureData }: SignaturePreviewProps) => {
  const templates = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    minimal: MinimalTemplate,
    professional: ProfessionalTemplate,
  };

  const SelectedTemplate = templates[signatureData.templateStyle as keyof typeof templates] || ClassicTemplate;

  return <SelectedTemplate data={signatureData} />;
};