import { Language } from "./types";

export const translations = {
  "en-US": {
    classic: "Classic",
    modern: "Modern",
    minimal: "Minimal",
    professional: "Professional",
    basicInfo: "Basic Info",
    mediaAndStyle: "Media and Style",
    socialLinks: "Social Links",
    customLinks: "Custom Links",
    previous: "Previous",
    next: "Next",
    finish: "Finish",
    fullName: "Full Name",
    jobTitle: "Job Title",
    company: "Company",
    email: "Email",
    phone: "Phone",
    website: "Website",
    uploadLogo: "Upload Logo",
    uploadBanner: "Upload Banner",
    colors: "Colors",
    primary: "Primary",
    secondary: "Secondary",
    accent: "Accent",
    font: "Font",
    addLink: "Add Link",
    label: "Label",
    url: "URL",
    removeLink: "Remove Link",
    successExport: "Export successful!",
    errorExport: "Export failed!",
    importSignature: "Import Signature",
    exportSignature: "Export Signature",
    templateStyle: "Template Style",
    templateSize: "Template Size",
    small: "Small",
    medium: "Medium",
    large: "Large",
    pageTitle: "Signature Generator",
    pageSubtitle: "Create your email signature easily.",
  },
  "pt-BR": {
    classic: "Clássico",
    modern: "Moderno",
    minimal: "Minimalista",
    professional: "Profissional",
    basicInfo: "Informações Básicas",
    mediaAndStyle: "Mídia e Estilo",
    socialLinks: "Links Sociais",
    customLinks: "Links Personalizados",
    previous: "Anterior",
    next: "Próximo",
    finish: "Finalizar",
    fullName: "Nome Completo",
    jobTitle: "Cargo",
    company: "Empresa",
    email: "Email",
    phone: "Telefone",
    website: "Website",
    uploadLogo: "Carregar Logo",
    uploadBanner: "Carregar Banner",
    colors: "Cores",
    primary: "Primária",
    secondary: "Secundária",
    accent: "Acento",
    font: "Fonte",
    addLink: "Adicionar Link",
    label: "Rótulo",
    url: "URL",
    removeLink: "Remover Link",
    successExport: "Exportação bem-sucedida!",
    errorExport: "Falha na exportação!",
    importSignature: "Importar Assinatura",
    exportSignature: "Exportar Assinatura",
    templateStyle: "Estilo do Template",
    templateSize: "Tamanho do Template",
    small: "Pequeno",
    medium: "Médio",
    large: "Grande",
    pageTitle: "Gerador de Assinaturas",
    pageSubtitle: "Crie sua assinatura de e-mail facilmente.",
  },
} as const;

export type TranslationKey =
  | "classic"
  | "modern"
  | "minimal"
  | "professional"
  | "basicInfo"
  | "mediaAndStyle"
  | "socialLinks"
  | "customLinks"
  | "previous"
  | "next"
  | "finish"
  | "fullName"
  | "jobTitle"
  | "company"
  | "email"
  | "phone"
  | "website"
  | "uploadLogo"
  | "uploadBanner"
  | "colors"
  | "primary"
  | "secondary"
  | "accent"
  | "font"
  | "addLink"
  | "label"
  | "url"
  | "removeLink"
  | "successExport"
  | "errorExport"
  | "importSignature"
  | "exportSignature"
  | "templateStyle"
  | "templateSize"
  | "small"
  | "medium"
  | "large"
  | "pageTitle"
  | "pageSubtitle";

export type Language = "en-US" | "pt-BR";
