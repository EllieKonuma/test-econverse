import React from "react";
import caroselStyles from "./carosel_styles.module.scss";

interface title {
  titleContent: string;
}

export default function (prop: title) {
  return (
    <div>
      <div className={caroselStyles.configDisplay}>
        <div className={caroselStyles.line}></div>
        <div className={caroselStyles.h2}>
          <h2>{prop.titleContent}</h2>
        </div>
        <div className={caroselStyles.line}></div>
      </div>
    </div>
  );
}
