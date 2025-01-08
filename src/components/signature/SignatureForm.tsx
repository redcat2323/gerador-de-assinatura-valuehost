import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Upload } from "lucide-react";
import { SignatureData } from "./types";
import { toast } from "sonner";

interface SignatureFormProps {
  signatureData: SignatureData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string, isNested?: boolean) => void;
  onImageUpload?: (url: string, type: 'logo' | 'banner') => void;
}

export const SignatureForm = ({ 
  signatureData, 
  handleInputChange,
  onImageUpload 
}: SignatureFormProps) => {
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'banner') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/upload-image`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error('Falha ao fazer upload da imagem');
      }

      const { url } = await response.json();
      onImageUpload?.(url, type);
      toast.success(`${type === 'logo' ? 'Logo' : 'Banner'} atualizado com sucesso!`);
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      toast.error('Erro ao fazer upload da imagem');
    }

    // Clear the input
    e.target.value = '';
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div>
          <Label>Logo</Label>
          <div className="flex items-center gap-2">
            {signatureData.logo_url && (
              <img 
                src={signatureData.logo_url} 
                alt="Logo" 
                className="w-10 h-10 object-contain"
              />
            )}
            <Button 
              variant="outline" 
              className="relative overflow-hidden"
              type="button"
            >
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'logo')}
              />
              <Upload className="w-4 h-4 mr-2" />
              Upload Logo
            </Button>
          </div>
        </div>

        <div>
          <Label>Banner Promocional</Label>
          <div className="flex items-center gap-2">
            {signatureData.banner_url && (
              <img 
                src={signatureData.banner_url} 
                alt="Banner" 
                className="w-32 h-10 object-contain"
              />
            )}
            <Button 
              variant="outline" 
              className="relative overflow-hidden"
              type="button"
            >
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'banner')}
              />
              <Upload className="w-4 h-4 mr-2" />
              Upload Banner
            </Button>
          </div>
        </div>
      </div>

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