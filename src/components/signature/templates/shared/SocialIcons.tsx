
import React from "react";
import { SignatureData } from "../../types";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface SocialIconsProps {
  social: SignatureData['social'];
  colors: SignatureData['colors'];
}

export const SocialIcons = ({ social, colors }: SocialIconsProps) => {
  if (!social.facebook && !social.twitter && !social.linkedin && !social.instagram) {
    return null;
  }

  // Set icon color to accent color or fall back to a default
  const iconColor = colors?.accent || "#9b87f5";
  const iconSize = 20;

  return (
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          {social.facebook && (
            <td style={{ paddingRight: "10px" }}>
              <a 
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Facebook color={iconColor} size={iconSize} />
              </a>
            </td>
          )}
          {social.twitter && (
            <td style={{ paddingRight: "10px" }}>
              <a 
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Twitter color={iconColor} size={iconSize} />
              </a>
            </td>
          )}
          {social.linkedin && (
            <td style={{ paddingRight: "10px" }}>
              <a 
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Linkedin color={iconColor} size={iconSize} />
              </a>
            </td>
          )}
          {social.instagram && (
            <td style={{ paddingRight: "10px" }}>
              <a 
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Instagram color={iconColor} size={iconSize} />
              </a>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};
