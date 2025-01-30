import React from "react";
import { SignatureData } from "../types";
import { SocialIcons } from "./shared/SocialIcons";
import { ContactInfo } from "./shared/ContactInfo";

interface MinimalTemplateProps {
  data: SignatureData;
}

export const MinimalTemplate = ({ data }: MinimalTemplateProps) => {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ width: "100%", maxWidth: "600px", fontFamily: data.font_family || "Arial, sans-serif" }}>
      <tbody>
        <tr>
          <td style={{ padding: "15px" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ borderBottom: `1px solid ${data.colors?.secondary}30`, paddingBottom: "15px" }}>
                            <span style={{ 
                              fontSize: "16px",
                              color: data.colors?.primary || "#1a1f2c",
                              fontWeight: "500"
                            }}>
                              {data.fullName || "Seu Nome"}
                            </span>
                            {(data.jobTitle || data.company) && (
                              <span style={{ 
                                fontSize: "14px",
                                color: data.colors?.secondary || "#8e9196",
                                marginLeft: "10px"
                              }}>
                                {data.jobTitle}
                                {data.company && ` | ${data.company}`}
                              </span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ paddingTop: "15px", display: "flex", alignItems: "center", gap: "15px" }}>
                            {data.logo_url && (
                              <img
                                src={data.logo_url}
                                alt="Logo"
                                style={{ 
                                  maxWidth: "100px", 
                                  height: "auto",
                                  borderRadius: data.logo_border_radius || "0"
                                }}
                              />
                            )}
                            <div>
                              <ContactInfo data={data} />
                              <div style={{ marginTop: "10px" }}>
                                <SocialIcons social={data.social} colors={data.colors} />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                {data.banner_url && (
                  <tr>
                    <td style={{ paddingTop: "15px" }}>
                      <img
                        src={data.banner_url}
                        alt="Banner Promocional"
                        style={{ 
                          width: "100%",
                          maxWidth: "600px",
                          height: "auto",
                          display: "block",
                          borderRadius: data.banner_border_radius || "0",
                          opacity: "0.95"
                        }}
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};