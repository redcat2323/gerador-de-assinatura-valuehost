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
  font_family?: string;
  logo_border_radius?: string;
  banner_border_radius?: string;
  templateSize?: 'small' | 'medium' | 'large';
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
  customLinks?: Array<{
    label: string;
    url: string;
  }>;
  textFormatting?: {
    fullName?: {
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
    };
    jobTitle?: {
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
    };
    company?: {
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
    };
  };
}

export type TemplateStyle = "classic" | "modern" | "minimal" | "professional";
export type TemplateSize = "small" | "medium" | "large";