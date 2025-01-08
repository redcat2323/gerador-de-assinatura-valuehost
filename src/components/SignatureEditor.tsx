import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { SignatureForm } from "./signature/SignatureForm";
import { SignaturePreview } from "./signature/SignaturePreview";
import { TemplateSelector } from "./signature/TemplateSelector";
import { SignatureData, TemplateStyle } from "./signature/types";

const SignatureEditor = () => {
  const [signatureData, setSignatureData] = useState<SignatureData>({
    fullName: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    templateStyle: "classic",
    logo_url: "",
    banner_url: "",
    social: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: "",
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

  const copySignature = () => {
    const signatureElement = document.getElementById("signature-preview");
    if (signatureElement) {
      const range = document.createRange();
      range.selectNode(signatureElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
      toast.success("Assinatura copiada para a área de transferência!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
      <Card className="flex-1 p-6 bg-editor border-editor-border">
        <h2 className="text-2xl font-semibold mb-6">Informações Básicas</h2>
        <SignatureForm
          signatureData={signatureData}
          handleInputChange={handleInputChange}
          onImageUpload={handleImageUpload}
        />
        <div className="mt-8">
          <TemplateSelector
            selectedTemplate={signatureData.templateStyle}
            onTemplateChange={handleTemplateChange}
          />
        </div>
      </Card>

      <div className="flex-1">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Preview</h2>
            <Button onClick={copySignature} variant="outline">
              <Copy className="w-4 h-4 mr-2" />
              Copiar
            </Button>
          </div>

          <div id="signature-preview" className="p-4 border rounded-md bg-white">
            <SignaturePreview signatureData={signatureData} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignatureEditor;