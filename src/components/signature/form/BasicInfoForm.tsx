import React from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { SignatureData } from "../types";
import { useTranslation } from "../../../hooks/useTranslation";

interface BasicInfoFormProps {
  signatureData: SignatureData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
}

export const BasicInfoForm = ({ signatureData, handleInputChange }: BasicInfoFormProps) => {
  const { t } = useTranslation();

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
      </div>

      <div>
        <Label htmlFor="jobTitle">{t("jobTitle")}</Label>
        <Input
          id="jobTitle"
          value={signatureData.jobTitle}
          onChange={(e) => handleInputChange(e, "jobTitle")}
          placeholder="Desenvolvedor Frontend"
        />
      </div>

      <div>
        <Label htmlFor="company">{t("company")}</Label>
        <Input
          id="company"
          value={signatureData.company}
          onChange={(e) => handleInputChange(e, "company")}
          placeholder="Empresa Tech"
        />
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