import React from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FontCustomizationFormProps {
  currentFont: string;
  onFontChange: (font: string) => void;
}

export const FontCustomizationForm = ({ currentFont, onFontChange }: FontCustomizationFormProps) => {
  const fonts = [
    { name: "Inter", value: "Inter" },
    { name: "Arial", value: "Arial" },
    { name: "Helvetica", value: "Helvetica" },
    { name: "Times New Roman", value: "Times New Roman" },
    { name: "Georgia", value: "Georgia" },
  ];

  return (
    <div className="space-y-4">
      <div>
        <Label>Fonte</Label>
        <Select value={currentFont} onValueChange={onFontChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione uma fonte" />
          </SelectTrigger>
          <SelectContent>
            {fonts.map((font) => (
              <SelectItem 
                key={font.value} 
                value={font.value}
                style={{ fontFamily: font.value }}
              >
                {font.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};