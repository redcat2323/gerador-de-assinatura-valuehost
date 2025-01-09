import React, { useState } from "react";
import { Card } from "./ui/card";
import { toast } from "sonner";
import { SignatureForm } from "./signature/SignatureForm";
import { SignaturePreview } from "./signature/SignaturePreview";
import { TemplateSelector } from "./signature/TemplateSelector";
import { useTranslation } from "../hooks/useTranslation";
import { TemplateStyle, SignatureData } from "./signature/types";
import { CopyButtons } from "./signature/CopyButtons";
import { EditorToolbar } from "./signature/EditorToolbar";

const SignatureEditor = () => {
  const { t } = useTranslation();

  const [signatureData, setSignatureData] = useState<SignatureData>({
    fullName: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    templateStyle: "classic" as TemplateStyle,
    social: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    colors: {
      primary: "#1a1f2c",
      secondary: "#8e9196",
      accent: "#9b87f5",
    },
    font_family: "Inter",
    logo_url: "",
    banner_url: "",
    logo_border_radius: "",
    banner_border_radius: "",
    customLinks: [],
    textFormatting: {
      fullName: {
        bold: false,
        italic: false,
        underline: false,
      },
      jobTitle: {
        bold: false,
        italic: false,
        underline: false,
      },
      company: {
        bold: false,
        italic: false,
        underline: false,
      },
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    isNested?: boolean
  ) => {
    if (isNested) {
      setSignatureData((prev) => ({
        ...prev,
        social: {
          ...prev.social,
          [field]: e.target.value,
        },
      }));
    } else {
      setSignatureData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    }
  };

  const handleTemplateChange = (template: TemplateStyle) => {
    setSignatureData((prev) => ({
      ...prev,
      templateStyle: template,
    }));
  };

  const handleImageUpload = (url: string, type: 'logo' | 'banner') => {
    setSignatureData((prev) => ({
      ...prev,
      [type === 'logo' ? 'logo_url' : 'banner_url']: url,
    }));
  };

  const handleColorChange = (colorType: 'primary' | 'secondary' | 'accent', value: string) => {
    setSignatureData((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorType]: value,
      },
    }));
  };

  const handleFontChange = (font: string) => {
    setSignatureData((prev) => ({
      ...prev,
      font_family: font,
    }));
  };

  const handleCustomLinksChange = (links: Array<{ label: string; url: string }>) => {
    setSignatureData((prev) => ({
      ...prev,
      customLinks: links,
    }));
  };

  const handleBorderRadiusChange = (type: 'logo' | 'banner', value: string) => {
    setSignatureData((prev) => ({
      ...prev,
      [type === 'logo' ? 'logo_border_radius' : 'banner_border_radius']: value,
    }));
  };

  const handleFormatChange = (field: string, format: 'bold' | 'italic' | 'underline') => {
    setSignatureData((prev) => ({
      ...prev,
      textFormatting: {
        ...prev.textFormatting,
        [field]: {
          ...prev.textFormatting?.[field as keyof typeof prev.textFormatting],
          [format]: !prev.textFormatting?.[field as keyof typeof prev.textFormatting]?.[format],
        },
      },
    }));
  };

  const exportSignature = () => {
    const dataStr = JSON.stringify(signatureData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `signature-${signatureData.fullName || "export"}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(t("successExport"));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 px-2 sm:px-6 max-w-7xl mx-auto">
      <Card className="flex-1 p-3 sm:p-6 bg-editor border-editor-border">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
          <h2 className="text-xl sm:text-2xl font-semibold">{t("basicInfo")}</h2>
          <EditorToolbar 
            onImport={setSignatureData}
            onExport={exportSignature}
          />
        </div>

        <SignatureForm
          signatureData={signatureData}
          handleInputChange={handleInputChange}
          handleImageUpload={handleImageUpload}
          handleColorChange={handleColorChange}
          handleFontChange={handleFontChange}
          handleCustomLinksChange={handleCustomLinksChange}
          handleBorderRadiusChange={handleBorderRadiusChange}
          handleFormatChange={handleFormatChange}
        />
      </Card>

      <div className="flex-1 space-y-4 sm:space-y-8">
        <Card className="p-3 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
            <h2 className="text-xl sm:text-2xl font-semibold">Preview</h2>
            <CopyButtons previewId="signature-preview" />
          </div>

          <TemplateSelector
            selectedTemplate={signatureData.templateStyle}
            handleTemplateChange={handleTemplateChange}
          />

          <div
            id="signature-preview"
            className="mt-4 sm:mt-6 p-2 sm:p-4 border rounded-lg bg-card overflow-x-auto"
          >
            <SignaturePreview signatureData={signatureData} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignatureEditor;