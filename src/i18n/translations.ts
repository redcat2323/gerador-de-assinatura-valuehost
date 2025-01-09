export type Language = "en-US" | "pt-BR";

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
    toggleTheme: "Toggle theme",
    light: "Light",
    dark: "Dark",
    copied: "Copied to clipboard!",
    copiedHtml: "HTML copied to clipboard!",
    errorCopying: "Error copying to clipboard",
    copyFormatted: "Copy Formatted",
    copyHtml: "Copy HTML",
    successImport: "Signature imported successfully!",
    invalidSignature: "Invalid signature file",
    errorImport: "Error importing signature",
    import: "Import",
    export: "Export",
    finishMessage: "You're all set! Your signature is ready to use.",
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
    toggleTheme: "Alternar tema",
    light: "Claro",
    dark: "Escuro",
    copied: "Copiado para a área de transferência!",
    copiedHtml: "HTML copiado para a área de transferência!",
    errorCopying: "Erro ao copiar para a área de transferência",
    copyFormatted: "Copiar Formatado",
    copyHtml: "Copiar HTML",
    successImport: "Assinatura importada com sucesso!",
    invalidSignature: "Arquivo de assinatura inválido",
    errorImport: "Erro ao importar assinatura",
    import: "Importar",
    export: "Exportar",
    finishMessage: "Tudo pronto! Sua assinatura está pronta para uso.",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en-US"];