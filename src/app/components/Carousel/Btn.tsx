import React from "react";
import caroselStyles from "./carosel_styles.module.scss";

interface name {
  name: string;
  // styles: string;
}

export default function Btn(prop: name) {
  return (
    <div className={caroselStyles.divBorder}>
      <div className={caroselStyles.pBnt}>
        <p>{prop.name}</p>
      </div>
    </div>
  );
}
