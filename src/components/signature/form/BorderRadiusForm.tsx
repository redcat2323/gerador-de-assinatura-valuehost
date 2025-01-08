import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { SignatureData } from "../types";

interface BorderRadiusFormProps {
  signatureData: SignatureData;
  onBorderRadiusChange: (type: 'logo' | 'banner', value: string) => void;
}

export const BorderRadiusForm = ({ signatureData, onBorderRadiusChange }: BorderRadiusFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label>Logo Border Radius</Label>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Ex: 8px ou 50%"
            value={signatureData.logo_border_radius || ''}
            onChange={(e) => onBorderRadiusChange('logo', e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div>
        <Label>Banner Border Radius</Label>
        <div className="flex items-center gap-2">
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