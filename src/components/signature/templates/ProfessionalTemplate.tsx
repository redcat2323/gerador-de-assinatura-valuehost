import React from "react";
import { SignatureData } from "../types";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface ProfessionalTemplateProps {
  data: SignatureData;
}

export const ProfessionalTemplate = ({ data }: ProfessionalTemplateProps) => {
  return (
    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
      <tbody>
        <tr>
          {data.logo_url && (
            <td style={{ verticalAlign: "top", paddingRight: "15px", width: "100px" }}>
              <img
                src={data.logo_url}
                alt="Logo"
                style={{ 
                  width: "100px",
                  height: "auto",
                  display: "block",
                  marginBottom: "10px"
                }}
              />
            </td>
          )}
          <td style={{ verticalAlign: "top" }}>
            <div className="border p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-start justify-between border-b pb-3 mb-3">
                <div>
                  <h2 className="text-xl font-bold text-primary">{data.fullName || "Seu Nome"}</h2>
                  <p className="text-gray-600">
                    {data.jobTitle && `${data.jobTitle}`}
                    {data.company && ` @ ${data.company}`}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2 mb-4">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="flex items-center text-primary hover:text-primary/80">
                    {data.email}
                  </a>
                )}
                {data.phone && (
                  <a href={`tel:${data.phone}`} className="flex items-center text-gray-600 hover:text-gray-800">
                    {data.phone}
                  </a>
                )}
                {data.website && (
                  <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    {data.website}
                  </a>
                )}
              </div>

              <div className="flex gap-4 pt-3 border-t">
                {data.social.facebook && (
                  <a href={data.social.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5 h-5 text-gray-600 hover:text-primary" />
                  </a>
                )}
                {data.social.twitter && (
                  <a href={data.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5 text-gray-600 hover:text-primary" />
                  </a>
                )}
                {data.social.linkedin && (
                  <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 text-gray-600 hover:text-primary" />
                  </a>
                )}
                {data.social.instagram && (
                  <a href={data.social.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 text-gray-600 hover:text-primary" />
                  </a>
                )}
              </div>
            </div>
          </td>
        </tr>
        {data.banner_url && (
          <tr>
            <td colSpan={2} style={{ paddingTop: "15px" }}>
              <img
                src={data.banner_url}
                alt="Banner Promocional"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};