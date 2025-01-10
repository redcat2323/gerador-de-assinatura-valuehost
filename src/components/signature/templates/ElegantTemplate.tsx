import React from "react";
import { SignatureData } from "../types";
import { SocialIcons } from "./shared/SocialIcons";
import { ContactInfo } from "./shared/ContactInfo";

interface ElegantTemplateProps {
  data: SignatureData;
}

export const ElegantTemplate = ({ data }: ElegantTemplateProps) => {
  const textStyle = {
    fontFamily: data.font_family || "Inter",
  };

  return (
    <table cellPadding="0" cellSpacing="0" style={{ ...textStyle }}>
      <tbody>
        <tr>
          <td style={{ 
            borderLeft: `3px solid ${data.colors?.accent || "#9b87f5"}`,
            paddingLeft: "20px"
          }}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ paddingBottom: "15px" }}>
                    {data.logo_url && (
                      <img
                        src={data.logo_url}
                        alt="Logo"
                        style={{
                          maxWidth: "100px",
                          borderRadius: data.logo_border_radius || "0",
                          marginBottom: "15px",
                        }}
                      />
                    )}
                    <div style={{ 
                      color: data.colors?.primary || "#1a1f2c",
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      fontStyle: "italic"
                    }}>
                      {data.fullName}
                    </div>
                    <div style={{ 
                      color: data.colors?.accent || "#9b87f5",
                      fontSize: "14px",
                      marginBottom: "3px"
                    }}>
                      {data.jobTitle}
                    </div>
                    <div style={{ 
                      color: data.colors?.secondary || "#8e9196",
                      fontSize: "14px"
                    }}>
                      {data.company}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ContactInfo data={data} />
                    <div style={{ marginTop: "15px" }}>
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