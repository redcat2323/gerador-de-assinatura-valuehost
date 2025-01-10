import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { TemplateStyle } from "./types";
import { useTranslation } from "../../hooks/useTranslation";

interface TemplateSelectorProps {
  selectedTemplate: string;
  handleTemplateChange: (template: TemplateStyle) => void;
}

export const TemplateSelector = ({ selectedTemplate, handleTemplateChange }: TemplateSelectorProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-base sm:text-lg font-medium">{t("templateStyle")}</h3>
      <RadioGroup
        value={selectedTemplate}
        onValueChange={(value) => handleTemplateChange(value as TemplateStyle)}
        className="grid grid-cols-2 gap-2 sm:gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="classic" id="classic" />
          <Label htmlFor="classic" className="text-sm sm:text-base">{t("classic")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="modern" id="modern" />
          <Label htmlFor="modern" className="text-sm sm:text-base">{t("modern")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="minimal" id="minimal" />
          <Label htmlFor="minimal" className="text-sm sm:text-base">{t("minimal")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="professional" id="professional" />
          <Label htmlFor="professional" className="text-sm sm:text-base">{t("professional")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="creative" id="creative" />
          <Label htmlFor="creative" className="text-sm sm:text-base">{t("creative")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="elegant" id="elegant" />
          <Label htmlFor="elegant" className="text-sm sm:text-base">{t("elegant")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="compact" />
          <Label htmlFor="compact" className="text-sm sm:text-base">{t("compact")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bold" id="bold" />
          <Label htmlFor="bold" className="text-sm sm:text-base">{t("bold")}</Label>
        </div>
      </RadioGroup>
    </div>
  );
};