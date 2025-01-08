import React from "react";
import { SignatureData } from "../types";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface ModernTemplateProps {
  data: SignatureData;
}

export const ModernTemplate = ({ data }: ModernTemplateProps) => {
  return (
    <div className="p-4 border-l-4 border-primary">
      <div className="mb-3">
        <h2 className="text-xl font-bold text-primary">{data.fullName || "Seu Nome"}</h2>
        <p className="text-gray-600">
          {data.jobTitle && `${data.jobTitle}`}
          {data.company && ` @ ${data.company}`}
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        {data.email && (
          <a href={`mailto:${data.email}`} className="text-primary hover:text-primary/80">
            {data.email}
          </a>
        )}
        {data.phone && (
          <a href={`tel:${data.phone}`} className="text-gray-600 hover:text-gray-800">
            {data.phone}
          </a>
        )}
        {data.website && (
          <a
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            {data.website}
          </a>
        )}
      </div>

      <div className="flex gap-4">
        {data.social.facebook && (
          <a href={data.social.facebook} target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 text-primary hover:text-primary/80" />
          </a>
        )}
        {data.social.twitter && (
          <a href={data.social.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 text-primary hover:text-primary/80" />
          </a>
        )}
        {data.social.linkedin && (
          <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-primary hover:text-primary/80" />
          </a>
        )}
        {data.social.instagram && (
          <a href={data.social.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-primary hover:text-primary/80" />
          </a>
        )}
      </div>
    </div>
  );
};