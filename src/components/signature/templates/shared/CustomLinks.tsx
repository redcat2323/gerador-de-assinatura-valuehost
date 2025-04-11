import React from "react";
import { SignatureData } from "../../types";

interface CustomLinksProps {
  data: SignatureData;
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
}

// Helper function to ensure URLs have proper format
const ensureHttps = (url: string): string => {
  if (!url) return "";
  
  // If URL already has a protocol (http:// or https://), return as is
  if (url.match(/^https?:\/\//)) {
    return url;
  }
  
  // Otherwise, add https:// prefix
  return `https://${url}`;
};

export const CustomLinks = ({ data, colors }: CustomLinksProps) => {
  if (!data.customLinks || data.customLinks.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      {data.customLinks.map((link, index) => (
        <div key={index} style={{ marginBottom: "5px" }}>
          <a
            href={ensureHttps(link.url)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: colors?.accent || "#9b87f5",
              textDecoration: "none",
              fontSize: "12px",
              display: "inline-block",
            }}
          >
            {link.label || link.url}
          </a>
        </div>
      ))}
    </div>
  );
};
