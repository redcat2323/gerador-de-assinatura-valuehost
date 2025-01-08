import React from "react";
import { SignatureData } from "../types";

interface ModernTemplateProps {
  data: SignatureData;
}

export const ModernTemplate = ({ data }: ModernTemplateProps) => {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ width: "100%", maxWidth: "600px", fontFamily: "Arial, sans-serif" }}>
      <tbody>
        <tr>
          <td style={{ padding: "20px", backgroundColor: "#ffffff" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {data.logo_url && (
                  <tr>
                    <td style={{ paddingBottom: "15px" }}>
                      <img
                        src={data.logo_url}
                        alt="Logo"
                        style={{ maxWidth: "150px", height: "auto" }}
                      />
                    </td>
                  </tr>
                )}
                <tr>
                  <td style={{ 
                    borderLeft: `4px solid ${data.colors.accent || "#9b87f5"}`,
                    paddingLeft: "15px"
                  }}>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ paddingBottom: "10px" }}>
                            <span style={{ 
                              fontSize: "18px", 
                              fontWeight: "bold",
                              color: data.colors.primary || "#1a1f2c"
                            }}>
                              {data.fullName || "Seu Nome"}
                            </span>
                            <br />
                            <span style={{ 
                              fontSize: "14px",
                              color: data.colors.secondary || "#8e9196"
                            }}>
                              {data.jobTitle}
                              {data.company && ` @ ${data.company}`}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                {data.email && (
                                  <tr>
                                    <td style={{ paddingBottom: "5px" }}>
                                      <a 
                                        href={`mailto:${data.email}`}
                                        style={{ 
                                          color: data.colors.accent || "#9b87f5",
                                          textDecoration: "none",
                                          fontSize: "14px"
                                        }}
                                      >
                                        {data.email}
                                      </a>
                                    </td>
                                  </tr>
                                )}
                                {data.phone && (
                                  <tr>
                                    <td style={{ paddingBottom: "5px" }}>
                                      <a 
                                        href={`tel:${data.phone}`}
                                        style={{ 
                                          color: data.colors.secondary || "#8e9196",
                                          textDecoration: "none",
                                          fontSize: "14px"
                                        }}
                                      >
                                        {data.phone}
                                      </a>
                                    </td>
                                  </tr>
                                )}
                                {data.website && (
                                  <tr>
                                    <td style={{ paddingBottom: "5px" }}>
                                      <a 
                                        href={data.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ 
                                          color: data.colors.secondary || "#8e9196",
                                          textDecoration: "none",
                                          fontSize: "14px"
                                        }}
                                      >
                                        {data.website}
                                      </a>
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        {(data.social.facebook || data.social.twitter || data.social.linkedin || data.social.instagram) && (
                          <tr>
                            <td style={{ paddingTop: "10px" }}>
                              <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    {data.social.facebook && (
                                      <td style={{ paddingRight: "10px" }}>
                                        <a 
                                          href={data.social.facebook}
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
                                    {data.social.twitter && (
                                      <td style={{ paddingRight: "10px" }}>
                                        <a 
                                          href={data.social.twitter}
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
                                    {data.social.linkedin && (
                                      <td style={{ paddingRight: "10px" }}>
                                        <a 
                                          href={data.social.linkedin}
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
                                    {data.social.instagram && (
                                      <td style={{ paddingRight: "10px" }}>
                                        <a 
                                          href={data.social.instagram}
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
                            </td>
                          </tr>
                        )}
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