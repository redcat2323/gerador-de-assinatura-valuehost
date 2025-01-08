import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { TemplateStyle } from "./types";
import { useTranslation } from "../../hooks/useTranslation";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateChange: (template: TemplateStyle) => void;
}

export const TemplateSelector = ({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{t("templateStyle")}</h3>
      <RadioGroup
        value={selectedTemplate}
        onValueChange={(value) => onTemplateChange(value as TemplateStyle)}
        className="grid grid-cols-2 gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="classic" id="classic" />
          <Label htmlFor="classic">{t("classic")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="modern" id="modern" />
          <Label htmlFor="modern">{t("modern")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="minimal" id="minimal" />
          <Label htmlFor="minimal">{t("minimal")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="professional" id="professional" />
          <Label htmlFor="professional">{t("professional")}</Label>
        </div>
      </RadioGroup>
    </div>
  );
};