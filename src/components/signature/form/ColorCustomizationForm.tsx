import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { SignatureData } from "../types";

interface ColorCustomizationFormProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  onColorChange: (colorType: 'primary' | 'secondary' | 'accent', value: string) => void;
}

export const ColorCustomizationForm = ({ colors, onColorChange }: ColorCustomizationFormProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Cores</h3>
      
      <div>
        <Label htmlFor="primaryColor">Cor Principal</Label>
        <div className="flex gap-2 items-center">
          <Input
            id="primaryColor"
            type="color"
            value={colors.primary}
            onChange={(e) => onColorChange('primary', e.target.value)}
            className="w-12 h-12 p-1 cursor-pointer"
          />
          <Input
            type="text"
            value={colors.primary}
            onChange={(e) => onColorChange('primary', e.target.value)}
            placeholder="#000000"
            className="font-mono"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="secondaryColor">Cor Secundária</Label>
        <div className="flex gap-2 items-center">
          <Input
            id="secondaryColor"
            type="color"
            value={colors.secondary}
            onChange={(e) => onColorChange('secondary', e.target.value)}
            className="w-12 h-12 p-1 cursor-pointer"
          />
          <Input
            type="text"
            value={colors.secondary}
            onChange={(e) => onColorChange('secondary', e.target.value)}
            placeholder="#666666"
            className="font-mono"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="accentColor">Cor de Destaque</Label>
        <div className="flex gap-2 items-center">
          <Input
            id="accentColor"
            type="color"
            value={colors.accent}
            onChange={(e) => onColorChange('accent', e.target.value)}
            className="w-12 h-12 p-1 cursor-pointer"
          />
          <Input
            type="text"
            value={colors.accent}
            onChange={(e) => onColorChange('accent', e.target.value)}
            placeholder="#9b87f5"
            className="font-mono"
          />
        </div>
      </div>
    </div>
  );
};