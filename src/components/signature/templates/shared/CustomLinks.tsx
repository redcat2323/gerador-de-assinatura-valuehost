
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

export const CustomLinks = ({ data, colors }: CustomLinksProps) => {
  if (!data.customLinks || data.customLinks.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      {data.customLinks.map((link, index) => (
        <div key={index} style={{ marginBottom: "5px" }}>
          <a
            href={link.url}
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
