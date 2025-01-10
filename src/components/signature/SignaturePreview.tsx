import React from "react";
import { SignatureData } from "./types";
import { ClassicTemplate } from "./templates/ClassicTemplate";
import { ModernTemplate } from "./templates/ModernTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";
import { CreativeTemplate } from "./templates/CreativeTemplate";
import { ElegantTemplate } from "./templates/ElegantTemplate";
import { CompactTemplate } from "./templates/CompactTemplate";
import { BoldTemplate } from "./templates/BoldTemplate";

interface SignaturePreviewProps {
  signatureData: SignatureData;
}

const getTemplateScale = (size?: string) => {
  switch (size) {
    case "small":
      return 0.8;
    case "large":
      return 1.2;
    default:
      return 1;
  }
};

export const SignaturePreview = ({ signatureData }: SignaturePreviewProps) => {
  const templates = {
    classic: ClassicTemplate,
    modern: ModernTemplate,
    minimal: MinimalTemplate,
    professional: ProfessionalTemplate,
    creative: CreativeTemplate,
    elegant: ElegantTemplate,
    compact: CompactTemplate,
    bold: BoldTemplate,
  };

  const SelectedTemplate = templates[signatureData.templateStyle as keyof typeof templates] || ClassicTemplate;
  const scale = getTemplateScale(signatureData.templateSize);

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
      <SelectedTemplate data={signatureData} />
    </div>
  );
};