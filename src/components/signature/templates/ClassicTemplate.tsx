import React from "react";
import { SignatureData } from "../types";
import { Facebook, Twitter, Linkedin, Instagram, Link } from "lucide-react";

interface ClassicTemplateProps {
  data: SignatureData;
}

export const ClassicTemplate = ({ data }: ClassicTemplateProps) => {
  return (
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top", paddingRight: "15px" }}>
            {data.logo_url && (
              <img
                src={data.logo_url}
                alt="Logo"
                style={{ 
                  maxWidth: "100px",
                  height: "auto",
                  marginBottom: "10px"
                }}
              />
            )}
          </td>
          <td style={{ verticalAlign: "top" }}>
            <strong className="text-lg text-primary">
              {data.fullName || "Seu Nome"}
            </strong>
            <br />
            <span className="text-gray-600">
              {data.jobTitle && `${data.jobTitle}`}
              {data.company && ` @ ${data.company}`}
            </span>

            <div style={{ marginTop: "10px" }}>
              {data.email && (
                <div>
                  <a
                    href={`mailto:${data.email}`}
                    className="text-primary hover:text-primary/80"
                  >
                    {data.email}
                  </a>
                </div>
              )}
              {data.phone && (
                <div>
                  <a
                    href={`tel:${data.phone}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {data.phone}
                  </a>
                </div>
              )}
              {data.website && (
                <div>
                  <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {data.website}
                  </a>
                </div>
              )}
              {data.customLinks?.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
                  >
                    <Link className="w-4 h-4" />
                    {link.label}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-3">
              {data.social.facebook && (
                <a
                  href={data.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-primary" />
                </a>
              )}
              {data.social.twitter && (
                <a
                  href={data.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-primary" />
                </a>
              )}
              {data.social.linkedin && (
                <a
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-primary" />
                </a>
              )}
              {data.social.instagram && (
                <a
                  href={data.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-primary" />
                </a>
              )}
            </div>
          </td>
        </tr>
        {data.banner_url && (
          <tr>
            <td colSpan={2} style={{ paddingTop: "15px" }}>
              <img
                src={data.banner_url}
                alt="Banner Promocional"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};