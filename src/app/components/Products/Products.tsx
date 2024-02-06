import React from "react";
import Title from "../Carousel/Title";
import ProductsCard from "./ProductsCard";
import productsStyle from "./products_style.module.scss";

export default function Products() {
  return (
    <div className={productsStyle.products}>
      <Title titleContent="Produtos relacionados" />
      <div className={productsStyle.h3}>
        <h3>Ver todos</h3>
      </div>
      <div className={productsStyle.cardsFlex}>
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  );
}
