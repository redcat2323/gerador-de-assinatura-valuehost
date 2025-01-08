import React from "react";
import { SignatureData } from "../types";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface ProfessionalTemplateProps {
  data: SignatureData;
}

export const ProfessionalTemplate = ({ data }: ProfessionalTemplateProps) => {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ width: "100%", maxWidth: "600px", fontFamily: "Arial, sans-serif" }}>
      <tbody>
        <tr>
          <td style={{ padding: "15px", backgroundColor: "#ffffff" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                {data.logo_url && (
                  <tr>
                    <td style={{ paddingBottom: "15px" }}>
                      <img
                        src={data.logo_url}
                        alt="Logo"
                        style={{ 
                          width: "100px",
                          height: "auto",
                          display: "block"
                        }}
                      />
                    </td>
                  </tr>
                )}
                <tr>
                  <td style={{ 
                    borderLeft: "4px solid #0070f3",
                    paddingLeft: "15px",
                    backgroundColor: "#ffffff"
                  }}>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td style={{ paddingBottom: "10px" }}>
                            <div style={{ 
                              fontSize: "18px", 
                              fontWeight: "bold",
                              color: "#1a1f2c"
                            }}>
                              {data.fullName || "Seu Nome"}
                            </div>
                            <div style={{ 
                              fontSize: "14px",
                              color: "#8e9196",
                              paddingTop: "4px"
                            }}>
                              {data.jobTitle && `${data.jobTitle}`}
                              {data.company && ` @ ${data.company}`}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ paddingBottom: "10px" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                {data.email && (
                                  <tr>
                                    <td style={{ paddingBottom: "5px" }}>
                                      <a href={`mailto:${data.email}`} 
                                         style={{ 
                                           color: "#0070f3", 
                                           textDecoration: "none",
                                           fontSize: "14px"
                                         }}>
                                        {data.email}
                                      </a>
                                    </td>
                                  </tr>
                                )}
                                {data.phone && (
                                  <tr>
                                    <td style={{ paddingBottom: "5px" }}>
                                      <a href={`tel:${data.phone}`} 
                                         style={{ 
                                           color: "#8e9196", 
                                           textDecoration: "none",
                                           fontSize: "14px"
                                         }}>
                                        {data.phone}
                                      </a>
                                    </td>
                                  </tr>
                                )}
                                {data.website && (
                                  <tr>
                                    <td style={{ paddingBottom: "5px" }}>
                                      <a href={data.website}
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         style={{ 
                                           color: "#8e9196", 
                                           textDecoration: "none",
                                           fontSize: "14px"
                                         }}>
                                        {data.website}
                                      </a>
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  {data.social.facebook && (
                                    <td style={{ paddingRight: "10px" }}>
                                      <a href={data.social.facebook} 
                                         target="_blank" 
                                         rel="noopener noreferrer"
                                         style={{ color: "#8e9196" }}>
                                        <Facebook style={{ width: "20px", height: "20px" }} />
                                      </a>
                                    </td>
                                  )}
                                  {data.social.twitter && (
                                    <td style={{ paddingRight: "10px" }}>
                                      <a href={data.social.twitter} 
                                         target="_blank" 
                                         rel="noopener noreferrer"
                                         style={{ color: "#8e9196" }}>
                                        <Twitter style={{ width: "20px", height: "20px" }} />
                                      </a>
                                    </td>
                                  )}
                                  {data.social.linkedin && (
                                    <td style={{ paddingRight: "10px" }}>
                                      <a href={data.social.linkedin} 
                                         target="_blank" 
                                         rel="noopener noreferrer"
                                         style={{ color: "#8e9196" }}>
                                        <Linkedin style={{ width: "20px", height: "20px" }} />
                                      </a>
                                    </td>
                                  )}
                                  {data.social.instagram && (
                                    <td style={{ paddingRight: "10px" }}>
                                      <a href={data.social.instagram} 
                                         target="_blank" 
                                         rel="noopener noreferrer"
                                         style={{ color: "#8e9196" }}>
                                        <Instagram style={{ width: "20px", height: "20px" }} />
                                      </a>
                                    </td>
                                  )}
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