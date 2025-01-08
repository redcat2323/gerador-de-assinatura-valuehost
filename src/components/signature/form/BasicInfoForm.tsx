import React from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { SignatureData } from "../types";
import { useTranslation } from "../../../hooks/useTranslation";
import { Button } from "../../ui/button";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "../../ui/toggle";

interface BasicInfoFormProps {
  signatureData: SignatureData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
  handleFormatChange?: (field: string, format: 'bold' | 'italic' | 'underline') => void;
}

export const BasicInfoForm = ({ signatureData, handleInputChange, handleFormatChange }: BasicInfoFormProps) => {
  const { t } = useTranslation();

  const renderFormatControls = (field: 'fullName' | 'jobTitle' | 'company') => {
    const formatting = signatureData.textFormatting?.[field] || {};
    
    return (
      <div className="flex gap-2 mt-1">
        <Toggle
          size="sm"
          pressed={formatting.bold}
          onPressedChange={() => handleFormatChange?.(field, 'bold')}
          aria-label="Toggle bold"
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={formatting.italic}
          onPressedChange={() => handleFormatChange?.(field, 'italic')}
          aria-label="Toggle italic"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={formatting.underline}
          onPressedChange={() => handleFormatChange?.(field, 'underline')}
          aria-label="Toggle underline"
        >
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="fullName">{t("fullName")}</Label>
        <Input
          id="fullName"
          value={signatureData.fullName}
          onChange={(e) => handleInputChange(e, "fullName")}
          placeholder="João Silva"
        />
        {renderFormatControls('fullName')}
      </div>

      <div>
        <Label htmlFor="jobTitle">{t("jobTitle")}</Label>
        <Input
          id="jobTitle"
          value={signatureData.jobTitle}
          onChange={(e) => handleInputChange(e, "jobTitle")}
          placeholder="Desenvolvedor Frontend"
        />
        {renderFormatControls('jobTitle')}
      </div>

      <div>
        <Label htmlFor="company">{t("company")}</Label>
        <Input
          id="company"
          value={signatureData.company}
          onChange={(e) => handleInputChange(e, "company")}
          placeholder="Empresa Tech"
        />
        {renderFormatControls('company')}
      </div>

      <div>
        <Label htmlFor="email">{t("email")}</Label>
        <Input
          id="email"
          type="email"
          value={signatureData.email}
          onChange={(e) => handleInputChange(e, "email")}
          placeholder="joao@empresa.com"
        />
      </div>

      <div>
        <Label htmlFor="phone">{t("phone")}</Label>
        <Input
          id="phone"
          value={signatureData.phone}
          onChange={(e) => handleInputChange(e, "phone")}
          placeholder="+55 (11) 99999-9999"
        />
      </div>

      <div>
        <Label htmlFor="website">{t("website")}</Label>
        <Input
          id="website"
          value={signatureData.website}
          onChange={(e) => handleInputChange(e, "website")}
          placeholder="www.empresa.com"
        />
      </div>
    </div>
  );
};