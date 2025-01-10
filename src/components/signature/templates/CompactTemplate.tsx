import React from "react";
import { SignatureData } from "../types";
import { SocialIcons } from "./shared/SocialIcons";
import { ContactInfo } from "./shared/ContactInfo";

interface CompactTemplateProps {
  data: SignatureData;
}

export const CompactTemplate = ({ data }: CompactTemplateProps) => {
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
                  {data.logo_url && (
                    <td style={{ paddingRight: "15px", verticalAlign: "middle" }}>
                      <img
                        src={data.logo_url}
                        alt="Logo"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: data.logo_border_radius || "50%",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                  )}
                  <td style={{ verticalAlign: "middle" }}>
                    <div style={{ 
                      color: data.colors?.primary || "#1a1f2c",
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "3px"
                    }}>
                      {data.fullName}
                    </div>
                    <div style={{ 
                      color: data.colors?.secondary || "#8e9196",
                      fontSize: "12px",
                      marginBottom: "2px"
                    }}>
                      {data.jobTitle} | {data.company}
                    </div>
                    <div style={{ marginTop: "8px" }}>
                      <SocialIcons social={data.social} colors={data.colors} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ paddingTop: "10px" }}>
                    <ContactInfo data={data} />
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