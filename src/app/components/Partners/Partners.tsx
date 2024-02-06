import React from "react";
import CardPartners from "./CardPartners";
import partnesStyle from "./partners_styles.module.scss";

export default function Partners() {
  return (
    <div className={partnesStyle.cardsFlex}>
      <CardPartners />
      <CardPartners />
    </div>
  );
}
