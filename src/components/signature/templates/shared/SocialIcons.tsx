import React from "react";
import { SignatureData } from "../../types";

interface SocialIconsProps {
  social: SignatureData['social'];
  colors: SignatureData['colors'];
}

export const SocialIcons = ({ social, colors }: SocialIconsProps) => {
  if (!social.facebook && !social.twitter && !social.linkedin && !social.instagram) {
    return null;
  }

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
                <img 
                  src="https://cdn-icons-png.flaticon.com/32/733/733547.png" 
                  alt="Facebook"
                  width="20"
                  height="20"
                  style={{ display: "block" }}
                />
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
                <img 
                  src="https://cdn-icons-png.flaticon.com/32/733/733579.png" 
                  alt="Twitter"
                  width="20"
                  height="20"
                  style={{ display: "block" }}
                />
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
                <img 
                  src="https://cdn-icons-png.flaticon.com/32/733/733561.png" 
                  alt="LinkedIn"
                  width="20"
                  height="20"
                  style={{ display: "block" }}
                />
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
                <img 
                  src="https://cdn-icons-png.flaticon.com/32/733/733558.png" 
                  alt="Instagram"
                  width="20"
                  height="20"
                  style={{ display: "block" }}
                />
              </a>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};