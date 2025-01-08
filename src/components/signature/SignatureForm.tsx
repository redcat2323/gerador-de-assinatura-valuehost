import React from "react";
import { SignatureData } from "./types";
import { BasicInfoForm } from "./form/BasicInfoForm";
import { SocialLinksForm } from "./form/SocialLinksForm";
import { MediaUploadForm } from "./form/MediaUploadForm";
import { ColorCustomizationForm } from "./form/ColorCustomizationForm";
import { FontCustomizationForm } from "./form/FontCustomizationForm";

interface SignatureFormProps {
  signatureData: SignatureData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string, isNested?: boolean) => void;
  onImageUpload?: (url: string, type: 'logo' | 'banner') => void;
  onColorChange?: (colorType: 'primary' | 'secondary' | 'accent', value: string) => void;
  onFontChange?: (font: string) => void;
}

export const SignatureForm = ({ 
  signatureData, 
  handleInputChange,
  onImageUpload,
  onColorChange,
  onFontChange
}: SignatureFormProps) => {
  const colors = {
    primary: "#1a1f2c",
    secondary: "#8e9196",
    accent: "#9b87f5",
    ...signatureData.colors,
  };

  return (
    <div className="space-y-8">
      <MediaUploadForm
        signatureData={signatureData}
        onImageUpload={onImageUpload || (() => {})}
      />

      <ColorCustomizationForm
        colors={colors}
        onColorChange={onColorChange || (() => {})}
      />

      <FontCustomizationForm
        currentFont={signatureData.font_family || "Inter"}
        onFontChange={onFontChange || (() => {})}
      />

      <BasicInfoForm
        signatureData={signatureData}
        handleInputChange={handleInputChange}
      />

      <SocialLinksForm
        signatureData={signatureData}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};