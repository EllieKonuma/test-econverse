import React from "react";
import services_styles from "./services_styles.module.scss";

interface IServices {
  title: string;
  image: React.JSX.Element;
}

export default function ServicesBtn(prop: IServices) {
  const celular = "celuar";
  return (
    <div className={services_styles.divbnt}>
      <div className={services_styles.bnt}>
        <div className={services_styles.imageBnt}>{prop.image}</div>
      </div>
      <div className={services_styles.p}>
        <p>{prop.title}</p>
      </div>
    </div>
  );
}
