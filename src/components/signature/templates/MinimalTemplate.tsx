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
                          {data.logo_url && (
                            <td style={{ verticalAlign: "top", paddingRight: "15px", width: "150px" }}>
                              <img
                                src={data.logo_url}
                                alt="Logo"
                                style={{ maxWidth: "150px", height: "auto" }}
                              />
                            </td>
                          )}
                          <td style={{ verticalAlign: "top" }}>
                            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                              <tbody>
                                <tr>
                                  <td style={{ paddingBottom: "5px" }}>
                                    <span style={{ 
                                      fontSize: "16px",
                                      color: data.colors.primary || "#1a1f2c",
                                      fontWeight: "normal"
                                    }}>
                                      {data.fullName || "Seu Nome"}
                                    </span>
                                  </td>
                                </tr>
                                {(data.jobTitle || data.company) && (
                                  <tr>
                                    <td style={{ paddingBottom: "10px" }}>
                                      <span style={{ 
                                        fontSize: "14px",
                                        color: data.colors.secondary || "#8e9196"
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
                                  <td style={{ paddingTop: "10px" }}>
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
                    <td style={{ paddingTop: "15px" }}>
                      <img
                        src={data.banner_url}
                        alt="Banner Promocional"
                        style={{ 
                          width: "100%",
                          maxWidth: "600px",
                          height: "auto",
                          display: "block"
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
