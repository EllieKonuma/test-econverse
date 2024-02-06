import React from "react";
import partnersStyles from "./partners_styles.module.scss";

export default function cardPartners() {
  return (
    <div className={partnersStyles.cardConfg}>
      <h2 className={partnersStyles.h2}>Parceiros</h2>
      <p className={partnersStyles.p}>
        Lorem ipsum dolor sit amet, consectetur
      </p>
      <button className={partnersStyles.confiraBtn}>CONFIRA</button>
    </div>
  );
}
