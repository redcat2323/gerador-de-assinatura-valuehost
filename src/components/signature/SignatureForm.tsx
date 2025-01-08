import React from "react";
import { SignatureData } from "./types";
import { BasicInfoForm } from "./form/BasicInfoForm";
import { SocialLinksForm } from "./form/SocialLinksForm";
import { MediaUploadForm } from "./form/MediaUploadForm";
import { ColorCustomizationForm } from "./form/ColorCustomizationForm";
import { FontCustomizationForm } from "./form/FontCustomizationForm";
import { CustomLinksForm } from "./form/CustomLinksForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useTranslation } from "../../hooks/useTranslation";

interface SignatureFormProps {
  signatureData: SignatureData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    isNested?: boolean
  ) => void;
  handleImageUpload: (url: string, type: "logo" | "banner") => void;
  handleColorChange: (
    colorType: "primary" | "secondary" | "accent",
    value: string
  ) => void;
  handleFontChange: (font: string) => void;
  handleCustomLinksChange: (links: Array<{ label: string; url: string }>) => void;
  handleBorderRadiusChange: (type: "logo" | "banner", value: string) => void;
}

export const SignatureForm = ({
  signatureData,
  handleInputChange,
  handleImageUpload,
  handleColorChange,
  handleFontChange,
  handleCustomLinksChange,
  handleBorderRadiusChange,
}: SignatureFormProps) => {
  const { t } = useTranslation();
  const colors = {
    primary: "#1a1f2c",
    secondary: "#8e9196",
    accent: "#9b87f5",
    ...signatureData.colors,
  };

  return (
    <Accordion type="single" collapsible defaultValue="step1" className="space-y-4">
      <AccordionItem value="step1" className="border rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
              1
            </div>
            <h3 className="text-lg font-medium">{t("mediaAndStyle")}</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-2">
          <div className="space-y-6">
            <MediaUploadForm
              signatureData={signatureData}
              onImageUpload={handleImageUpload}
              onBorderRadiusChange={handleBorderRadiusChange}
            />
            <ColorCustomizationForm colors={colors} onColorChange={handleColorChange} />
            <FontCustomizationForm
              currentFont={signatureData.font_family || "Inter"}
              onFontChange={handleFontChange}
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="step2" className="border rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
              2
            </div>
            <h3 className="text-lg font-medium">{t("basicInfo")}</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-2">
          <BasicInfoForm
            signatureData={signatureData}
            handleInputChange={handleInputChange}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="step3" className="border rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
              3
            </div>
            <h3 className="text-lg font-medium">{t("socialLinks")}</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-2">
          <SocialLinksForm
            signatureData={signatureData}
            handleInputChange={handleInputChange}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="step4" className="border rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">
              4
            </div>
            <h3 className="text-lg font-medium">{t("customLinks")}</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-2">
          <CustomLinksForm
            signatureData={signatureData}
            onCustomLinksChange={handleCustomLinksChange}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};