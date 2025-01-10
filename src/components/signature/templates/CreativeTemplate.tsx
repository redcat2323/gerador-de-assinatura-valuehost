import React from "react";
import { SignatureData } from "../types";
import { SocialIcons } from "./shared/SocialIcons";
import { ContactInfo } from "./shared/ContactInfo";

interface CreativeTemplateProps {
  data: SignatureData;
}

export const CreativeTemplate = ({ data }: CreativeTemplateProps) => {
  const textStyle = {
    fontFamily: data.font_family || "Inter",
  };

  return (
    <table cellPadding="0" cellSpacing="0" style={{ ...textStyle }}>
      <tbody>
        <tr>
          <td style={{ padding: "20px", background: data.colors?.accent || "#9b87f5", borderRadius: "15px" }}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ paddingBottom: "15px" }}>
                    {data.logo_url && (
                      <img
                        src={data.logo_url}
                        alt="Logo"
                        style={{
                          maxWidth: "120px",
                          borderRadius: data.logo_border_radius || "0",
                          marginBottom: "10px",
                        }}
                      />
                    )}
                    <div style={{ 
                      color: "#ffffff",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}>
                      {data.fullName}
                    </div>
                    <div style={{ 
                      color: "#ffffff",
                      fontSize: "16px",
                      opacity: 0.9,
                      marginBottom: "5px"
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
                  <td style={{ paddingTop: "15px" }}>
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