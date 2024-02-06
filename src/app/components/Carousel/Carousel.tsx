import React from "react";
import CarouselHead from "./CarouselHead";
import CarouselCard from "./CarouselCard";
import FCelular from "../../Image/FotoCelular.png";
import caroselStyles from "./carosel_styles.module.scss";
import ArrowL from "../icons/ArrowL";
import ArrowR from "../icons/ArrowR";

export default function Carousel() {
  return (
    <div>
      <CarouselHead />
      <div className={caroselStyles.crouselFex}>
        <ArrowL />
        <CarouselCard
          image={FCelular}
          alt="Foto Celular"
          infoProduct="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          infoDiscount="30,90"
          infoPrice="28,90"
          xInterestRate="ou 2x de R$ 49,95 sem juros"
          freeFreight="Frete grátis"
        />
        <CarouselCard
          image={FCelular}
          alt="Foto Celular"
          infoProduct="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          infoDiscount="30,90"
          infoPrice="28,90"
          xInterestRate="ou 2x de R$ 49,95 sem juros"
          freeFreight="Frete grátis"
        />
        <CarouselCard
          image={FCelular}
          alt="Foto Celular"
          infoProduct="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          infoDiscount="30,90"
          infoPrice="28,90"
          xInterestRate="ou 2x de R$ 49,95 sem juros"
          freeFreight="Frete grátis"
        />
        <CarouselCard
          image={FCelular}
          alt="Foto Celular"
          infoProduct="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          infoDiscount="30,90"
          infoPrice="28,90"
          xInterestRate="ou 2x de R$ 49,95 sem juros"
          freeFreight="Frete grátis"
        />
        <ArrowR />
      </div>
    </div>
  );
}
