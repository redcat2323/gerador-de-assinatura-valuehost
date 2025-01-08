import React from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Plus, Trash2 } from "lucide-react";
import { SignatureData } from "../types";

interface CustomLinksFormProps {
  signatureData: SignatureData;
  onCustomLinksChange: (links: Array<{ label: string; url: string }>) => void;
}

export const CustomLinksForm = ({
  signatureData,
  onCustomLinksChange,
}: CustomLinksFormProps) => {
  const links = signatureData.customLinks || [];

  const addLink = () => {
    onCustomLinksChange([...links, { label: "", url: "" }]);
  };

  const removeLink = (index: number) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    onCustomLinksChange(newLinks);
  };

  const updateLink = (index: number, field: "label" | "url", value: string) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    onCustomLinksChange(newLinks);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Links Personalizados</h3>
        <Button type="button" variant="outline" size="sm" onClick={addLink}>
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Link
        </Button>
      </div>

      {links.map((link, index) => (
        <div key={index} className="space-y-2 p-4 border rounded-md">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Link {index + 1}</span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeLink(index)}
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </div>

          <div className="space-y-2">
            <div>
              <Label htmlFor={`link-label-${index}`}>Texto do Link</Label>
              <Input
                id={`link-label-${index}`}
                value={link.label}
                onChange={(e) => updateLink(index, "label", e.target.value)}
                placeholder="Ex: Meu Portfolio"
              />
            </div>
            <div>
              <Label htmlFor={`link-url-${index}`}>URL</Label>
              <Input
                id={`link-url-${index}`}
                value={link.url}
                onChange={(e) => updateLink(index, "url", e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};