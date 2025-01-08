import React from "react";
import { SignatureData } from "./types";
import { BasicInfoForm } from "./form/BasicInfoForm";
import { SocialLinksForm } from "./form/SocialLinksForm";
import { MediaUploadForm } from "./form/MediaUploadForm";
import { ColorCustomizationForm } from "./form/ColorCustomizationForm";
import { FontCustomizationForm } from "./form/FontCustomizationForm";
import { CustomLinksForm } from "./form/CustomLinksForm";

interface SignatureFormProps {
  signatureData: SignatureData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string, isNested?: boolean) => void;
  handleImageUpload: (url: string, type: 'logo' | 'banner') => void;
  handleColorChange: (colorType: 'primary' | 'secondary' | 'accent', value: string) => void;
  handleFontChange: (font: string) => void;
  handleCustomLinksChange: (links: Array<{ label: string; url: string }>) => void;
  handleBorderRadiusChange: (type: 'logo' | 'banner', value: string) => void;
}

export const SignatureForm = ({ 
  signatureData, 
  handleInputChange,
  handleImageUpload,
  handleColorChange,
  handleFontChange,
  handleCustomLinksChange,
  handleBorderRadiusChange
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
        onImageUpload={handleImageUpload}
        onBorderRadiusChange={handleBorderRadiusChange}
      />

      <ColorCustomizationForm
        colors={colors}
        onColorChange={handleColorChange}
      />

      <FontCustomizationForm
        currentFont={signatureData.font_family || "Inter"}
        onFontChange={handleFontChange}
      />

      <BasicInfoForm
        signatureData={signatureData}
        handleInputChange={handleInputChange}
      />

      <SocialLinksForm
        signatureData={signatureData}
        handleInputChange={handleInputChange}
      />

      <CustomLinksForm
        signatureData={signatureData}
        onCustomLinksChange={handleCustomLinksChange}
      />
    </div>
  );
};