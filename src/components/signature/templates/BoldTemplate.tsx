import React from "react";
import { SignatureData } from "../types";
import { SocialIcons } from "./shared/SocialIcons";
import { ContactInfo } from "./shared/ContactInfo";

interface BoldTemplateProps {
  data: SignatureData;
}

export const BoldTemplate = ({ data }: BoldTemplateProps) => {
  const textStyle = {
    fontFamily: data.font_family || "Inter",
  };

  return (
    <table cellPadding="0" cellSpacing="0" style={{ ...textStyle }}>
      <tbody>
        <tr>
          <td>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ 
                    backgroundColor: data.colors?.primary || "#1a1f2c",
                    padding: "20px",
                    borderRadius: "10px 10px 0 0"
                  }}>
                    {data.logo_url && (
                      <img
                        src={data.logo_url}
                        alt="Logo"
                        style={{
                          maxWidth: "120px",
                          borderRadius: data.logo_border_radius || "0",
                          marginBottom: "15px",
                        }}
                      />
                    )}
                    <div style={{ 
                      color: "#ffffff",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      textTransform: "uppercase"
                    }}>
                      {data.fullName}
                    </div>
                    <div style={{ 
                      color: data.colors?.accent || "#9b87f5",
                      fontSize: "16px",
                      marginBottom: "3px"
                    }}>
                      {data.jobTitle}
                    </div>
                    <div style={{ 
                      color: "#ffffff",
                      fontSize: "14px",
                      opacity: 0.8
                    }}>
                      {data.company}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    backgroundColor: data.colors?.accent || "#9b87f5",
                    padding: "15px",
                    borderRadius: "0 0 10px 10px"
                  }}>
                    <ContactInfo data={data} />
                    <div style={{ marginTop: "10px" }}>
                      <SocialIcons social={data.social} colors={data.colors} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};