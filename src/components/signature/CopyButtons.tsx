import React from "react";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "@/hooks/useTranslation";

interface CopyButtonsProps {
  previewId: string;
}

export const CopyButtons = ({ previewId }: CopyButtonsProps) => {
  const { t } = useTranslation();

  const copyFormattedText = async () => {
    try {
      const previewElement = document.querySelector(`#${previewId}`) as HTMLElement;
      if (previewElement) {
        // Cria uma seleção visual do conteúdo
        const range = document.createRange();
        range.selectNodeContents(previewElement);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
          
          // Copia o conteúdo formatado
          await navigator.clipboard.writeText(previewElement.innerText);
          
          // Remove a seleção após um breve momento
          setTimeout(() => {
            selection.removeAllRanges();
          }, 500);
          
          toast.success(t("copied"));
        }
      }
    } catch (error) {
      toast.error(t("errorCopying"));
    }
  };

  const copyHtml = async () => {
    try {
      const previewElement = document.querySelector(`#${previewId}`) as HTMLElement;
      if (previewElement) {
        await navigator.clipboard.writeText(previewElement.innerHTML);
        toast.success(t("copiedHtml"));
      }
    } catch (error) {
      toast.error(t("errorCopying"));
    }
  };

  return (
    <div className="flex gap-2">
      <Button onClick={copyFormattedText} variant="outline" size="sm">
        <Copy className="w-4 h-4 mr-2" />
        {t("copyFormatted")}
      </Button>
      <Button onClick={copyHtml} variant="outline" size="sm">
        <Copy className="w-4 h-4 mr-2" />
        {t("copyHtml")}
      </Button>
    </div>
  );
};