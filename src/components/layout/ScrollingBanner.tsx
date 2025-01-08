import React from "react";

export const ScrollingBanner = () => {
  return (
    <div className="w-full bg-black overflow-hidden whitespace-nowrap relative">
      <div className="inline-block animate-scroll">
        <span className="inline-block text-[#13E881] py-2 pr-8">
          HOSPEDAGEM DE SITES - SERVIDORES DEDICADOS - FERRAMENTAS PARA O MERCADO DIGITAL - BACKUP DIÁRIO - PLUGINS E TEMAS WORDPRESS - INSTALAÇÃO WORDPRESS - SSL GRÁTIS - COMPRE SEUS DOMÍNIOS - HOSPEDAGEM DE SITE - SERVIDORES VPS - E-MAILS ILIMITADOS
        </span>
        <span className="inline-block text-[#13E881] py-2 pr-8">
          HOSPEDAGEM DE SITES - SERVIDORES DEDICADOS - FERRAMENTAS PARA O MERCADO DIGITAL - BACKUP DIÁRIO - PLUGINS E TEMAS WORDPRESS - INSTALAÇÃO WORDPRESS - SSL GRÁTIS - COMPRE SEUS DOMÍNIOS - HOSPEDAGEM DE SITE - SERVIDORES VPS - E-MAILS ILIMITADOS
        </span>
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};