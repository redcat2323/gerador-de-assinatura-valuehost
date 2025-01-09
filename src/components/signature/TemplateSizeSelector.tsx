import React from "react";
import { Button } from "../ui/button";
import { useTranslation } from "../../hooks/useTranslation";
import { TemplateSize } from "./types";

interface TemplateSizeSelectorProps {
  selectedSize: TemplateSize;
  handleSizeChange: (size: TemplateSize) => void;
}

export const TemplateSizeSelector = ({
  selectedSize,
  handleSizeChange,
}: TemplateSizeSelectorProps) => {
  const { t } = useTranslation();
  const sizes: TemplateSize[] = ["small", "medium", "large"];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{t("templateSize")}</label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? "default" : "outline"}
            onClick={() => handleSizeChange(size)}
            className="flex-1 sm:flex-none"
          >
            {t(size)}
          </Button>
        ))}
      </div>
    </div>
  );
};