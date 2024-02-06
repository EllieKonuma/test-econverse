import React from "react";
import caroselStyles from "./carosel_styles.module.scss";
import Btn from "./Btn";
import Title from "./Title";

export default function TileButtons() {
  return (
    <div className={caroselStyles.configContainer}>
      <Title titleContent="Produtos relacionados" />
      <div className={caroselStyles.alineBnts}>
        <Btn name="CELULAR" />
        <Btn name="ACESSÓRIOS" />
        <Btn name="TABLETS" />
        <Btn name="NOTEBOOKS" />
        <Btn name="TVS" />
        <Btn name="VER TODOS" />
      </div>
    </div>
  );
}
