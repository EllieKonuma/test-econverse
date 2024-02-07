import Image, { StaticImageData } from "next/image";
import React from "react";
import caroselStyles from "./carosel_styles.module.scss";
import { Product } from "@/app/page";
import { formatMoney } from "@/utils/formatMoney";

interface InformationCard {
  product: Product;
  onClick: (index: Product) => void;
}

export default function CarouselCard({ product, onClick }: InformationCard) {
  return (
    <div className={caroselStyles.cardConfig}>
      <img src={product.photo} />
      <p className={caroselStyles.pInfo}>{product.descriptionShort}</p>

      <div>
        <p className={caroselStyles.pDiscount}>
          {formatMoney.format(product.price * 1.1)}
        </p>
        <p className={caroselStyles.pPrice}>
          {formatMoney.format(product.price)}
        </p>
      </div>
      <p className={caroselStyles.xInterestRate}>
        ou 2x de {formatMoney.format(product.price / 2)} sem juros
      </p>
      <p className={caroselStyles.freight}>Frete grátis</p>
      <button
        className={caroselStyles.compraBtn}
        onClick={() => onClick(product)}
      >
        Comprar
      </button>
    </div>
  );
}
