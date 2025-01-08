export type Language = "pt-BR" | "en-US";

export type TranslationKey = keyof (typeof translations)["pt-BR"];

export const translations = {
  "pt-BR": {
    basicInfo: "Informações Básicas",
    mediaAndStyle: "Mídia e Estilo",
    socialLinks: "Links Sociais",
    customLinks: "Links Personalizados",
    previous: "Anterior",
    next: "Próximo",
    finish: "Finalizado 🚀",
    fullName: "Nome Completo",
    jobTitle: "Cargo",
    company: "Empresa",
    email: "E-mail",
    phone: "Telefone",
    website: "Website",
    uploadLogo: "Upload Logo",
    uploadBanner: "Upload Banner",
    primaryColor: "Cor Primária",
    secondaryColor: "Cor Secundária",
    accentColor: "Cor de Destaque",
    font: "Fonte",
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    addLink: "Adicionar Link",
    label: "Rótulo",
    url: "URL",
    remove: "Remover",
    copied: "Copiado!",
    copiedHtml: "HTML copiado!",
    errorCopying: "Erro ao copiar",
    copyFormatted: "Copiar Formatado",
    copyHtml: "Copiar HTML",
    import: "Importar",
    export: "Exportar",
    successExport: "Assinatura exportada com sucesso!",
    errorImport: "Erro ao importar arquivo",
    successImport: "Assinatura importada com sucesso!",
    invalidSignature: "Assinatura inválida",
    borderRadius: "Borda Arredondada",
    finishMessage: "Sua assinatura está pronta! Agora você pode copiá-la usando os botões acima.",
    toggleTheme: "Alternar tema",
    light: "Claro",
    dark: "Escuro",
    system: "Sistema",
    templateStyle: "Estilo do Template",
    classic: "Clássico",
    modern: "Moderno",
    minimal: "Minimalista",
    professional: "Profissional",
    pageTitle: "Gerador de Assinatura de E-mail",
    pageSubtitle: "Crie uma assinatura de e-mail profissional em poucos minutos. Personalize modelos prontos com suas informações e estilo."
  },
  "en-US": {
    basicInfo: "Basic Information",
    mediaAndStyle: "Media & Style",
    socialLinks: "Social Links",
    customLinks: "Custom Links",
    previous: "Previous",
    next: "Next",
    finish: "Finished 🚀",
    fullName: "Full Name",
    jobTitle: "Job Title",
    company: "Company",
    email: "Email",
    phone: "Phone",
    website: "Website",
    uploadLogo: "Upload Logo",
    uploadBanner: "Upload Banner",
    primaryColor: "Primary Color",
    secondaryColor: "Secondary Color",
    accentColor: "Accent Color",
    font: "Font",
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    addLink: "Add Link",
    label: "Label",
    url: "URL",
    remove: "Remove",
    copied: "Copied!",
    copiedHtml: "HTML copied!",
    errorCopying: "Error copying",
    copyFormatted: "Copy Formatted",
    copyHtml: "Copy HTML",
    import: "Import",
    export: "Export",
    successExport: "Signature exported successfully!",
    errorImport: "Error importing file",
    successImport: "Signature imported successfully!",
    invalidSignature: "Invalid signature",
    borderRadius: "Border Radius",
    finishMessage: "Your signature is ready! You can now copy it using the buttons above.",
    toggleTheme: "Toggle theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    templateStyle: "Template Style",
    classic: "Classic",
    modern: "Modern",
    minimal: "Minimal",
    professional: "Professional",
    pageTitle: "Email Signature Generator",
    pageSubtitle: "Create a professional email signature in minutes. Customize ready-made templates with your information and style."
  }
} as const;