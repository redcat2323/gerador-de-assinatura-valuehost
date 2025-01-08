import React, { useState } from "react";
import { SignatureData } from "./types";
import { BasicInfoForm } from "./form/BasicInfoForm";
import { SocialLinksForm } from "./form/SocialLinksForm";
import { MediaUploadForm } from "./form/MediaUploadForm";
import { ColorCustomizationForm } from "./form/ColorCustomizationForm";
import { FontCustomizationForm } from "./form/FontCustomizationForm";
import { CustomLinksForm } from "./form/CustomLinksForm";
import { Button } from "../ui/button";
import { useTranslation } from "../../hooks/useTranslation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const colors = {
    primary: "#1a1f2c",
    secondary: "#8e9196",
    accent: "#9b87f5",
    ...signatureData.colors,
  };

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold">
                1
              </div>
              <h3 className="text-xl font-semibold">{t("basicInfo")}</h3>
            </div>
            <BasicInfoForm
              signatureData={signatureData}
              handleInputChange={handleInputChange}
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold">
                2
              </div>
              <h3 className="text-xl font-semibold">{t("mediaAndStyle")}</h3>
            </div>
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
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold">
                3
              </div>
              <h3 className="text-xl font-semibold">{t("socialLinks")}</h3>
            </div>
            <SocialLinksForm
              signatureData={signatureData}
              handleInputChange={handleInputChange}
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold">
                4
              </div>
              <h3 className="text-xl font-semibold">{t("customLinks")}</h3>
            </div>
            <CustomLinksForm
              signatureData={signatureData}
              onCustomLinksChange={handleCustomLinksChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="w-full bg-secondary/20 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={goToPreviousStep}
          disabled={currentStep === 1}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          {t("previous")}
        </Button>
        <Button
          onClick={goToNextStep}
          disabled={currentStep === totalSteps}
        >
          {currentStep === totalSteps ? t("finish") : t("next")}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};