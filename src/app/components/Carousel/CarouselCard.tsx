import Image, { StaticImageData } from "next/image";
import React from "react";
import caroselStyles from "./carosel_styles.module.scss";

interface InformationCard {
  image: StaticImageData;
  alt: string;
  infoProduct: string;
  infoDiscount: string;
  infoPrice: string;
  xInterestRate?: string;
  freeFreight?: string;
}

export default function CarouselCard(prop: InformationCard) {
  return (
    <div className={caroselStyles.cardConfig}>
      <Image src={prop.image} alt={prop.alt} />
      <p className={caroselStyles.pInfo}>{prop.infoProduct}</p>

      <div>
        <p className={caroselStyles.pDiscount}>R$ {prop.infoDiscount}</p>
        <p className={caroselStyles.pPrice}>R$ {prop.infoPrice}</p>
      </div>
      <p className={caroselStyles.xInterestRate}>{prop.xInterestRate}</p>
      <p className={caroselStyles.freight}>{prop.freeFreight}</p>
      <button className={caroselStyles.compraBtn}>Comprar</button>
    </div>
  );
}
