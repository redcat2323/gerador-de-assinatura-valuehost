import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Download, Upload } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "../../hooks/useTranslation";
import { SignatureData } from "./types";

interface EditorToolbarProps {
  onImport: (data: SignatureData) => void;
  onExport: () => void;
}

export const EditorToolbar = ({ onImport, onExport }: EditorToolbarProps) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);

        if (
          typeof importedData === "object" &&
          "fullName" in importedData &&
          "social" in importedData &&
          "colors" in importedData
        ) {
          onImport(importedData);
          toast.success(t("successImport"));
        } else {
          toast.error(t("invalidSignature"));
        }
      } catch (error) {
        toast.error(t("errorImport"));
      }
    };
    reader.readAsText(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
      <Button onClick={handleImportClick} variant="outline" size="sm" className="flex-1 sm:flex-none">
        <Upload className="w-4 h-4 mr-2" />
        {t("import")}
      </Button>
      <Button onClick={onExport} variant="outline" size="sm" className="flex-1 sm:flex-none">
        <Download className="w-4 h-4 mr-2" />
        {t("export")}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileImport}
        accept=".json"
        className="hidden"
      />
    </div>
  );
};