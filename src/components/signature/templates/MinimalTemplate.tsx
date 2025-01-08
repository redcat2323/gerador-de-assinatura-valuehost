import React from "react";
import { SignatureData } from "../types";

interface MinimalTemplateProps {
  data: SignatureData;
}

export const MinimalTemplate = ({ data }: MinimalTemplateProps) => {
  return (
    <div className="font-light">
      <p className="text-lg mb-1">{data.fullName || "Seu Nome"}</p>
      <p className="text-sm text-gray-600 mb-2">
        {data.jobTitle && `${data.jobTitle}`}
        {data.company && ` @ ${data.company}`}
      </p>
      
      <div className="text-sm space-y-1">
        {data.email && (
          <div>
            <a href={`mailto:${data.email}`} className="text-gray-600 hover:text-primary">
              {data.email}
            </a>
          </div>
        )}
        {data.phone && (
          <div>
            <a href={`tel:${data.phone}`} className="text-gray-600 hover:text-primary">
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
              className="text-gray-600 hover:text-primary"
            >
              {data.website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};