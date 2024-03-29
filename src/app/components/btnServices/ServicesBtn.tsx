import React from "react";
import services_styles from "./services_styles.module.scss";
import Image, { StaticImageData } from "next/image";

interface IServices {
  title: string;
  image: StaticImageData;
}

export default function ServicesBtn(prop: IServices) {
  const celular = "celuar";
  return (
    <div className={services_styles.divbnt}>
      <div className={services_styles.bnt}>
        <div className={services_styles.imageBnt}>
          <Image src={prop.image} alt="" />
        </div>
      </div>
      <div className={services_styles.p}>
        <p>{prop.title}</p>
      </div>
    </div>
  );
}
