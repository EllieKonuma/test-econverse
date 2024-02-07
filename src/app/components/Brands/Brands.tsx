import Image from "next/image";
import React from "react";
import logoImage from "../../Image/Logo_VTEX.svg";
import brandsStyles from "./brands_styles.module.scss";

export default function Brands() {
  return (
    <div className={brandsStyles.containerFlex}>
      <h2 className={brandsStyles.h2}>Navegue por marcas</h2>
      <div className={brandsStyles.brandsFlex}>
        <div className={brandsStyles.brand}>
          <Image src={logoImage} alt="logo vetex" width={172} height={62.66} />
        </div>
        <div className={brandsStyles.brand}>
          <Image src={logoImage} alt="logo vetex" width={172} height={62.66} />
        </div>
        <div className={brandsStyles.brand}>
          <Image src={logoImage} alt="logo vetex" width={172} height={62.66} />
        </div>
        <div className={brandsStyles.brand}>
          <Image src={logoImage} alt="logo vetex" width={172} height={62.66} />
        </div>
        <div className={brandsStyles.brand}>
          <Image src={logoImage} alt="logo vetex" width={172} height={62.66} />
        </div>
      </div>
    </div>
  );
}
