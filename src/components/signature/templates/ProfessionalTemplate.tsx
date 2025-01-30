import React from "react";
import { SignatureData } from "../types";
import { SocialIcons } from "./shared/SocialIcons";
import { ContactInfo } from "./shared/ContactInfo";

interface ProfessionalTemplateProps {
  data: SignatureData;
}

export const ProfessionalTemplate = ({ data }: ProfessionalTemplateProps) => {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ width: "100%", maxWidth: "600px", fontFamily: data.font_family || "Arial, sans-serif" }}>
      <tbody>
        <tr>
          <td style={{ 
            padding: "25px",
            border: `1px solid ${data.colors?.secondary}20`,
            borderRadius: "4px"
          }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          {data.logo_url && (
                            <td style={{ verticalAlign: "middle", paddingRight: "25px", width: "120px" }}>
                              <img
                                src={data.logo_url}
                                alt="Logo"
                                style={{ 
                                  width: "120px", 
                                  height: "auto",
                                  borderRadius: data.logo_border_radius || "0"
                                }}
                              />
                            </td>
                          )}
                          <td style={{ verticalAlign: "middle" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                              <tbody>
                                <tr>
                                  <td>
                                    <span style={{ 
                                      fontSize: "18px", 
                                      fontWeight: "600",
                                      color: data.colors?.primary || "#1a1f2c",
                                      display: "block",
                                      textTransform: "uppercase",
                                      letterSpacing: "1px"
                                    }}>
                                      {data.fullName || "Seu Nome"}
                                    </span>
                                    {(data.jobTitle || data.company) && (
                                      <span style={{ 
                                        fontSize: "14px",
                                        color: data.colors?.accent || "#9b87f5",
                                        display: "block",
                                        marginTop: "4px",
                                        fontWeight: "500"
                                      }}>
                                        {data.jobTitle}
                                        {data.company && ` | ${data.company}`}
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} style={{ paddingTop: "20px" }}>
                            <div style={{ 
                              height: "1px", 
                              background: `linear-gradient(to right, ${data.colors?.accent || "#9b87f5"}50, transparent)`,
                              margin: "0 0 20px 0"
                            }} />
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
                {data.banner_url && (
                  <tr>
                    <td style={{ paddingTop: "20px" }}>
                      <img
                        src={data.banner_url}
                        alt="Banner Promocional"
                        style={{ 
                          width: "100%",
                          maxWidth: "600px",
                          height: "auto",
                          display: "block",
                          borderRadius: data.banner_border_radius || "0"
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