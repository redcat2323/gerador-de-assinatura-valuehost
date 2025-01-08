import React, { useState, useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Copy, Download, Upload } from "lucide-react";
import { toast } from "sonner";
import { SignatureForm } from "./signature/SignatureForm";
import { SignaturePreview } from "./signature/SignaturePreview";
import { TemplateSelector } from "./signature/TemplateSelector";
import { useTranslation } from "../hooks/useTranslation";
import { TemplateStyle } from "./signature/types";

const SignatureEditor = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [signatureData, setSignatureData] = useState({
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
    customLinks: [],
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

  const copyToClipboard = async () => {
    try {
      const previewElement = document.querySelector("#signature-preview");
      if (previewElement) {
        await navigator.clipboard.writeText(previewElement.innerHTML);
        toast.success(t("copied"));
      }
    } catch (error) {
      toast.error(t("errorCopying"));
    }
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

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const importSignature = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);

        if (
          typeof importedData === "object" &&
          "fullName" in importedData &&
          "social" in importedData &&
          "colors" in importedData
        ) {
          setSignatureData(importedData);
          toast.success(t("successImport"));
        } else {
          toast.error(t("invalidSignature"));
        }
      } catch (error) {
        toast.error(t("errorImport"));
      }
    };
    reader.readAsText(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
      <Card className="flex-1 p-6 bg-editor border-editor-border">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{t("basicInfo")}</h2>
          <div className="flex gap-2">
            <Button onClick={handleImportClick} variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              {t("import")}
            </Button>
            <Button onClick={exportSignature} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              {t("export")}
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={importSignature}
              accept=".json"
              className="hidden"
            />
          </div>
        </div>

        <SignatureForm
          signatureData={signatureData}
          handleInputChange={handleInputChange}
          handleImageUpload={handleImageUpload}
          handleColorChange={handleColorChange}
          handleFontChange={handleFontChange}
          handleCustomLinksChange={handleCustomLinksChange}
        />
      </Card>

      <div className="flex-1 space-y-8">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Preview</h2>
            <Button onClick={copyToClipboard} variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              {t("copy")}
            </Button>
          </div>

          <TemplateSelector
            selectedTemplate={signatureData.templateStyle}
            handleTemplateChange={handleTemplateChange}
          />

          <div
            id="signature-preview"
            className="mt-6 p-4 border rounded-lg bg-card"
          >
            <SignaturePreview signatureData={signatureData} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignatureEditor;