import React from "react";
import productsStyle from "./products_style.module.scss";

export default function PoductsCard() {
  return (
    <div className={productsStyle.cardConfg}>
      <h2 className={productsStyle.h2}>Produtos</h2>
      <p className={productsStyle.p}>Lorem ipsum dolor sit amet, consectetur</p>
      <button className={productsStyle.confiraBtn}>CONFIRA</button>
    </div>
  );
}
