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
        // Create a temporary container to hold the cloned content
        const tempContainer = document.createElement('div');
        const clone = previewElement.cloneNode(true) as HTMLElement;
        tempContainer.appendChild(clone);
        
        // Apply computed styles to the cloned content
        const computedStyle = window.getComputedStyle(previewElement);
        clone.style.cssText = computedStyle.cssText;
        
        // Create a selection range for the cloned content
        const range = document.createRange();
        range.selectNodeContents(previewElement);
        const selection = window.getSelection();
        
        if (selection) {
          // Clear any existing selection
          selection.removeAllRanges();
          // Add our new range
          selection.addRange(range);
          
          try {
            // Try to copy with the new Clipboard API
            await navigator.clipboard.write([
              new ClipboardItem({
                'text/html': new Blob([previewElement.outerHTML], { type: 'text/html' }),
                'text/plain': new Blob([previewElement.innerText], { type: 'text/plain' })
              })
            ]);
            toast.success(t("copied"));
          } catch (clipboardError) {
            // Fallback to the older execCommand method
            document.execCommand('copy');
            toast.success(t("copied"));
          }
          
          // Clear the selection after a brief moment
          setTimeout(() => {
            selection.removeAllRanges();
          }, 100);
        }
      }
    } catch (error) {
      console.error('Copy error:', error);
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
      console.error('Copy HTML error:', error);
      toast.error(t("errorCopying"));
    }
  };

  return (
    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
      <Button onClick={copyFormattedText} variant="outline" size="sm" className="flex-1 sm:flex-none">
        <Copy className="w-4 h-4 mr-2" />
        {t("copyFormatted")}
      </Button>
      <Button onClick={copyHtml} variant="outline" size="sm" className="flex-1 sm:flex-none">
        <Copy className="w-4 h-4 mr-2" />
        {t("copyHtml")}
      </Button>
    </div>
  );
};