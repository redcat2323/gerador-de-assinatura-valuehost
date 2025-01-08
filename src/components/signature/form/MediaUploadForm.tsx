import React from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Upload } from "lucide-react";
import { SignatureData } from "../types";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { UploadInstructions } from "./UploadInstructions";

interface MediaUploadFormProps {
  signatureData: SignatureData;
  onImageUpload: (url: string, type: 'logo' | 'banner') => void;
}

export const MediaUploadForm = ({ signatureData, onImageUpload }: MediaUploadFormProps) => {
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'banner') => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tamanho do arquivo (1MB)
    if (file.size > 1024 * 1024) {
      toast.error('O arquivo deve ter no máximo 1MB');
      return;
    }

    // Validar tipo do arquivo
    if (!file.type.startsWith('image/')) {
      toast.error('Apenas imagens são permitidas');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    try {
      const { data, error } = await supabase.functions.invoke('upload-image', {
        body: formData,
      });

      if (error) {
        throw error;
      }

      if (data?.url) {
        onImageUpload(data.url, type);
        toast.success(`${type === 'logo' ? 'Logo' : 'Banner'} atualizado com sucesso!`);
      }
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      toast.error('Erro ao fazer upload da imagem');
    }

    e.target.value = '';
  };

  return (
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
        <UploadInstructions type="logo" />
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
        <UploadInstructions type="banner" />
      </div>
    </div>
  );
};