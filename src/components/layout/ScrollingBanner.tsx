import React from "react";

export const ScrollingBanner = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap relative" style={{ backgroundColor: "#377dff" }}>
      <div className="inline-block animate-scroll">
        <span className="inline-block text-white py-2 pr-8 font-poppins text-sm tracking-wide">
          HOSPEDAGEM DE SITES - SERVIDORES DEDICADOS - FERRAMENTAS PARA O MERCADO DIGITAL - BACKUP DIÁRIO - PLUGINS E TEMAS WORDPRESS - INSTALAÇÃO WORDPRESS - SSL GRÁTIS - COMPRE SEUS DOMÍNIOS - HOSPEDAGEM DE SITE - SERVIDORES VPS - E-MAILS ILIMITADOS
        </span>
        <span className="inline-block text-white py-2 pr-8 font-poppins text-sm tracking-wide">
          HOSPEDAGEM DE SITES - SERVIDORES DEDICADOS - FERRAMENTAS PARA O MERCADO DIGITAL - BACKUP DIÁRIO - PLUGINS E TEMAS WORDPRESS - INSTALAÇÃO WORDPRESS - SSL GRÁTIS - COMPRE SEUS DOMÍNIOS - HOSPEDAGEM DE SITE - SERVIDORES VPS - E-MAILS ILIMITADOS
        </span>
      </div>
      <div className="absolute inset-y-0 left-0 w-8 sm:w-[32rem]" style={{ background: "linear-gradient(to right, #377dff, transparent)" }}></div>
      <div className="absolute inset-y-0 right-0 w-8 sm:w-[32rem]" style={{ background: "linear-gradient(to left, #377dff, transparent)" }}></div>
    </div>
  );
};