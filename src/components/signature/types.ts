export interface SignatureData {
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  templateStyle: string;
  logo_url?: string;
  banner_url?: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export type TemplateStyle = "classic" | "modern" | "minimal" | "professional";