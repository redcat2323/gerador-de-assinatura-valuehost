import React from "react";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Upload, Trash2 } from "lucide-react";
import { SignatureData } from "../types";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { UploadInstructions } from "./UploadInstructions";

interface MediaUploadFormProps {
  signatureData: SignatureData;
  onImageUpload: (url: string, type: 'logo' | 'banner') => void;
  onBorderRadiusChange: (type: 'logo' | 'banner', value: string) => void;
}

export const MediaUploadForm = ({ 
  signatureData, 
  onImageUpload,
  onBorderRadiusChange 
}: MediaUploadFormProps) => {
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

  const handleImageRemove = async (type: 'logo' | 'banner') => {
    try {
      const imageUrl = type === 'logo' ? signatureData.logo_url : signatureData.banner_url;
      if (!imageUrl) return;

      // Extract the file path from the URL
      const urlParts = imageUrl.split('/');
      const filePath = urlParts[urlParts.length - 1];

      const { error: deleteError } = await supabase.storage
        .from('signatures')
        .remove([filePath]);

      if (deleteError) {
        throw deleteError;
      }

      // Update the signature data to remove the image URL
      onImageUpload('', type);
      toast.success(`${type === 'logo' ? 'Logo' : 'Banner'} removido com sucesso!`);
    } catch (error) {
      console.error('Erro ao remover imagem:', error);
      toast.error('Erro ao remover a imagem');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <Label>Logo</Label>
        <div className="flex items-center gap-2">
          {signatureData.logo_url && (
            <div className="relative group">
              <img 
                src={signatureData.logo_url} 
                alt="Logo" 
                className="w-10 h-10 object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6 bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleImageRemove('logo')}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
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

        <div className="mt-2">
          <Label>Arredondar borda do Logo</Label>
          <Input
            type="text"
            placeholder="Ex: 8px ou 50%"
            value={signatureData.logo_border_radius || ''}
            onChange={(e) => onBorderRadiusChange('logo', e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Label>Banner Promocional</Label>
        <div className="flex items-center gap-2">
          {signatureData.banner_url && (
            <div className="relative group">
              <img 
                src={signatureData.banner_url} 
                alt="Banner" 
                className="w-32 h-10 object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6 bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleImageRemove('banner')}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
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

        <div className="mt-2">
          <Label>Arredondar borda do Banner</Label>
          <Input
            type="text"
            placeholder="Ex: 8px ou 50%"
            value={signatureData.banner_border_radius || ''}
            onChange={(e) => onBorderRadiusChange('banner', e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};