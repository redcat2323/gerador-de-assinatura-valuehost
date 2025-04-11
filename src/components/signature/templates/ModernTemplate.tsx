
import React from "react";
import { SignatureData } from "../types";
import { SocialIcons } from "./shared/SocialIcons";
import { ContactInfo } from "./shared/ContactInfo";
import { CustomLinks } from "./shared/CustomLinks";

interface ModernTemplateProps {
  data: SignatureData;
}

export const ModernTemplate = ({ data }: ModernTemplateProps) => {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ width: "100%", maxWidth: "600px", fontFamily: data.font_family || "Arial, sans-serif" }}>
      <tbody>
        <tr>
          <td style={{ 
            padding: "25px", 
            background: `linear-gradient(to right, ${data.colors?.accent}15, ${data.colors?.background || "#ffffff"})`,
            borderRadius: "8px"
          }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        {data.logo_url && (
                          <tr>
                            <td style={{ paddingBottom: "20px" }}>
                              <img
                                src={data.logo_url}
                                alt="Logo"
                                style={{ 
                                  maxWidth: "180px", 
                                  height: "auto",
                                  borderRadius: data.logo_border_radius || "0"
                                }}
                              />
                            </td>
                          </tr>
                        )}
                        <tr>
                          <td>
                            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                              <tbody>
                                <tr>
                                  <td style={{ paddingBottom: "10px" }}>
                                    <span style={{ 
                                      fontSize: "24px", 
                                      fontWeight: "600",
                                      color: data.colors?.primary || "#1a1f2c",
                                      display: "block",
                                      letterSpacing: "0.5px"
                                    }}>
                                      {data.fullName || "Seu Nome"}
                                    </span>
                                    {(data.jobTitle || data.company) && (
                                      <span style={{ 
                                        fontSize: "15px",
                                        color: data.colors?.secondary || "#8e9196",
                                        display: "block",
                                        marginTop: "4px"
                                      }}>
                                        {data.jobTitle}
                                        {data.company && ` | ${data.company}`}
                                      </span>
                                    )}
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingBottom: "15px" }}>
                                    <ContactInfo data={data} />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <SocialIcons social={data.social} colors={data.colors} />
                                    <CustomLinks data={data} colors={data.colors} />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
                          borderRadius: data.banner_border_radius || "0",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
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
