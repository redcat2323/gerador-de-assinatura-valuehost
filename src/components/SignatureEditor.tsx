import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { toast } from "sonner";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Copy,
} from "lucide-react";

interface SignatureData {
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

const SignatureEditor = () => {
  const [signatureData, setSignatureData] = useState<SignatureData>({
    fullName: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
    website: "",
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
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input
              id="fullName"
              value={signatureData.fullName}
              onChange={(e) => handleInputChange(e, "fullName")}
              placeholder="João Silva"
            />
          </div>

          <div>
            <Label htmlFor="jobTitle">Cargo</Label>
            <Input
              id="jobTitle"
              value={signatureData.jobTitle}
              onChange={(e) => handleInputChange(e, "jobTitle")}
              placeholder="Desenvolvedor Frontend"
            />
          </div>

          <div>
            <Label htmlFor="company">Empresa</Label>
            <Input
              id="company"
              value={signatureData.company}
              onChange={(e) => handleInputChange(e, "company")}
              placeholder="Empresa Tech"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={signatureData.email}
              onChange={(e) => handleInputChange(e, "email")}
              placeholder="joao@empresa.com"
            />
          </div>

          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={signatureData.phone}
              onChange={(e) => handleInputChange(e, "phone")}
              placeholder="+55 (11) 99999-9999"
            />
          </div>

          <div>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              value={signatureData.website}
              onChange={(e) => handleInputChange(e, "website")}
              placeholder="www.empresa.com"
            />
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-medium">Redes Sociais</h3>
            
            <div>
              <Label htmlFor="facebook">
                <Facebook className="inline-block w-4 h-4 mr-2" />
                Facebook
              </Label>
              <Input
                id="facebook"
                value={signatureData.social.facebook}
                onChange={(e) => handleInputChange(e, "facebook", true)}
                placeholder="URL do Facebook"
              />
            </div>

            <div>
              <Label htmlFor="twitter">
                <Twitter className="inline-block w-4 h-4 mr-2" />
                Twitter
              </Label>
              <Input
                id="twitter"
                value={signatureData.social.twitter}
                onChange={(e) => handleInputChange(e, "twitter", true)}
                placeholder="URL do Twitter"
              />
            </div>

            <div>
              <Label htmlFor="linkedin">
                <Linkedin className="inline-block w-4 h-4 mr-2" />
                LinkedIn
              </Label>
              <Input
                id="linkedin"
                value={signatureData.social.linkedin}
                onChange={(e) => handleInputChange(e, "linkedin", true)}
                placeholder="URL do LinkedIn"
              />
            </div>

            <div>
              <Label htmlFor="instagram">
                <Instagram className="inline-block w-4 h-4 mr-2" />
                Instagram
              </Label>
              <Input
                id="instagram"
                value={signatureData.social.instagram}
                onChange={(e) => handleInputChange(e, "instagram", true)}
                placeholder="URL do Instagram"
              />
            </div>
          </div>
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

          <div
            id="signature-preview"
            className="p-4 border rounded-md bg-white"
          >
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    <strong className="text-lg text-primary">
                      {signatureData.fullName || "Seu Nome"}
                    </strong>
                    <br />
                    <span className="text-gray-600">
                      {signatureData.jobTitle && `${signatureData.jobTitle}`}
                      {signatureData.company && ` @ ${signatureData.company}`}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingBottom: "10px" }}>
                    {signatureData.email && (
                      <div>
                        <a
                          href={`mailto:${signatureData.email}`}
                          className="text-primary hover:text-primary/80"
                        >
                          {signatureData.email}
                        </a>
                      </div>
                    )}
                    {signatureData.phone && (
                      <div>
                        <a
                          href={`tel:${signatureData.phone}`}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          {signatureData.phone}
                        </a>
                      </div>
                    )}
                    {signatureData.website && (
                      <div>
                        <a
                          href={signatureData.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800"
                        >
                          {signatureData.website}
                        </a>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex gap-3">
                      {signatureData.social.facebook && (
                        <a
                          href={signatureData.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Facebook className="w-5 h-5 text-gray-600 hover:text-primary" />
                        </a>
                      )}
                      {signatureData.social.twitter && (
                        <a
                          href={signatureData.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="w-5 h-5 text-gray-600 hover:text-primary" />
                        </a>
                      )}
                      {signatureData.social.linkedin && (
                        <a
                          href={signatureData.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5 text-gray-600 hover:text-primary" />
                        </a>
                      )}
                      {signatureData.social.instagram && (
                        <a
                          href={signatureData.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="w-5 h-5 text-gray-600 hover:text-primary" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignatureEditor;