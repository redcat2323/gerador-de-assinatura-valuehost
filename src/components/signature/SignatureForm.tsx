import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { SignatureData } from "./types";

interface SignatureFormProps {
  signatureData: SignatureData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string, isNested?: boolean) => void;
}

export const SignatureForm = ({ signatureData, handleInputChange }: SignatureFormProps) => {
  return (
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
  );
};