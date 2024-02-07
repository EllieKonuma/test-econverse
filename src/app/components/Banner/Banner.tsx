import React from "react";
import bstyles from "./Bsyles.module.scss";

export default function Body() {
  return (
    <div className={bstyles.imageDiv}>
      <div className={bstyles.pTitle}>
        <p>Venha conhecer nossas promoções</p>
      </div>
      <div className={bstyles.pPromotion}>
        <p>50% Off nos produtos</p>
      </div>
      <button className={bstyles.btn}>Ver produto</button>
    </div>
  );
}
