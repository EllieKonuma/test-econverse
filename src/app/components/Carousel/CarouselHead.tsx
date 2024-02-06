import React from "react";
import caroselStyles from "./carosel_styles.module.scss";
import Btn from "./Btn";

export default function TileButtons() {
  return (
    <div className={caroselStyles.configContainer}>
      <div className={caroselStyles.configDisplay}>
        <div className={caroselStyles.line}></div>
        <div className={caroselStyles.h2}>
          <h2>Produtos relacionados</h2>
        </div>
        <div className={caroselStyles.line}></div>
      </div>
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
