import React from "react";
import ServicesBtn from "./ServicesBtn";
import comp from "../Image/monitorar-tablet-e-smartohone 1.svg";
import Image from "next/image";
import Computer from "./icons/Computer";
import Cart from "./icons/Cart";

import services_styles from "./services_styles.module.scss";

export default function Services() {
  return (
    <div className={services_styles.containerBnt}>
      <ServicesBtn
        title="Tecnologia"
        image={<Computer className={services_styles.imageBnt} />}
      />
      <ServicesBtn title="Supermercado" image={<Cart />} />
      <ServicesBtn title="Bebidas" image={<Computer />} />
      <ServicesBtn title="Ferramentas" image={<Computer />} />
      <ServicesBtn title="Saúde" image={<Computer />} />
      <ServicesBtn title="Esportes e Fitness" image={<Computer />} />
      <ServicesBtn title="Moda " image={<Computer />} />
      {/* <div>
        <Image src={comp} alt="samba" />
      </div> */}
    </div>
  );
}
