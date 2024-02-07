import React from "react";
import ServicesBtn from "./ServicesBtn";

import services_styles from "./services_styles.module.scss";

import imgComp from "../../Image/btn.png/monitorar-tablet-e-smartohone 1.png";
import imgSup from "../../Image/btn.png/supermercados.png";
import imgBebidas from "../../Image/btn.png/whiskey.png";
import imgFerramentas from "../../Image/btn.png/ferramentas.png";
import imgSaude from "../../Image/btn.png/cuidados-de-saude.png";
import imgEsportes from "../../Image/btn.png/corrida.png";
import imgModa from "../../Image/btn.png/moda.png";

export default function Services() {
  return (
    <div className={services_styles.containerBnt}>
      <ServicesBtn title="Tecnologia" image={imgComp} />
      <ServicesBtn title="Supermercado" image={imgSup} />
      <ServicesBtn title="Bebidas" image={imgBebidas} />
      <ServicesBtn title="Ferramentas" image={imgFerramentas} />
      <ServicesBtn title="Saúde" image={imgSaude} />
      <ServicesBtn title="Esportes e Fitness" image={imgEsportes} />
      <ServicesBtn title="Moda " image={imgModa} />
    </div>
  );
}
