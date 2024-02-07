import React from "react";
import footerStyles from "./footer_styles.module.scss";
import Image from "next/image";
import iRedes from "../../Image/redes.png";
import ifPagamento from "../../Image/formas_pagamento.png";
import brandsEV from "../../Image/BrandsEV.png";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.fDiv}>
        <div className={footerStyles.infoFooter}>
          <div className={footerStyles.divFlex}>
            <h3 className={footerStyles.h3}>Sobre nós</h3>
            <p className={footerStyles.p}>CONHEÇA</p>
            <p className={footerStyles.p}>COMO COMPRAR</p>
            <p className={footerStyles.p}>INDICAÇÃO E DESCONTO</p>
            <Image src={iRedes} alt="redes sociais" />
          </div>
          <div className={footerStyles.divFlex}>
            <h3 className={footerStyles.h3}>INFORMAÇÕES ÚTEIS</h3>
            <p className={footerStyles.p}>FALE CONOSCO</p>
            <p className={footerStyles.p}>DÚVIDAS</p>
            <p className={footerStyles.p}>PRAZOS DE ENTREGA</p>
            <p className={footerStyles.p}>FORMAS DE PAGAMENTOS</p>
            <p className={footerStyles.p}>POLÍTICAS DE PRIVACIDADE</p>
            <p className={footerStyles.p}>TROCAS E DEVOLUÇÕES</p>
          </div>
          <div className={footerStyles.divFlex}>
            <h3 className={footerStyles.h3}>FORMAS DE PAGAMENTOS</h3>
            <Image src={ifPagamento} alt="formas de pagamentos" />
          </div>
        </div>
        <div className={footerStyles.pad}>
          <div className={footerStyles.forms}>
            <div>
              <h2 className={footerStyles.fh2}>Cadastre-se e Receba nossas</h2>
              <h3 className={footerStyles.fh3}>NOVIDADES E PROMOÇÕES</h3>
            </div>
            <p className={footerStyles.pForms}>
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>
            <div className="">
              <input
                type="text"
                placeholder="  SEU E-MAIL"
                className={footerStyles.textF}
              />
              <button type="submit" className={footerStyles.btnF}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={footerStyles.copyright}>
        <p className={footerStyles.cP}>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <Image src={brandsEV} alt="Logos" />
      </div>
    </footer>
  );
}
