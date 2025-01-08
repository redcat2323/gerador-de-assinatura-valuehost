import React from "react";
import { SignatureData } from "../types";
import { SocialIcons } from "./shared/SocialIcons";
import { ContactInfo } from "./shared/ContactInfo";

interface ClassicTemplateProps {
  data: SignatureData;
}

export const ClassicTemplate = ({ data }: ClassicTemplateProps) => {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ width: "100%", maxWidth: "600px", fontFamily: data.font_family || "Arial, sans-serif" }}>
      <tbody>
        <tr>
          <td style={{ padding: "20px", borderLeft: `3px solid ${data.colors?.accent || "#9b87f5"}` }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          {data.logo_url && (
                            <td style={{ verticalAlign: "top", paddingRight: "20px", width: "150px" }}>
                              <img
                                src={data.logo_url}
                                alt="Logo"
                                style={{ 
                                  maxWidth: "150px", 
                                  height: "auto",
                                  borderRadius: data.logo_border_radius || "0"
                                }}
                              />
                            </td>
                          )}
                          <td style={{ verticalAlign: "top" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                              <tbody>
                                <tr>
                                  <td style={{ paddingBottom: "10px" }}>
                                    <span style={{ 
                                      fontSize: "20px", 
                                      fontWeight: "bold",
                                      color: data.colors?.primary || "#1a1f2c",
                                      letterSpacing: "0.5px"
                                    }}>
                                      {data.fullName || "Seu Nome"}
                                    </span>
                                  </td>
                                </tr>
                                {(data.jobTitle || data.company) && (
                                  <tr>
                                    <td style={{ paddingBottom: "15px" }}>
                                      <span style={{ 
                                        fontSize: "14px",
                                        color: data.colors?.secondary || "#8e9196",
                                        fontStyle: "italic"
                                      }}>
                                        {data.jobTitle}
                                        {data.company && ` @ ${data.company}`}
                                      </span>
                                    </td>
                                  </tr>
                                )}
                                <tr>
                                  <td>
                                    <ContactInfo data={data} />
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingTop: "15px" }}>
                                    <SocialIcons social={data.social} colors={data.colors} />
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