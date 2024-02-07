"use client";
import React, { useState } from "react";
import CarouselHead from "./CarouselHead";
import CarouselCard from "./CarouselCard";
import FCelular from "../../Image/FotoCelular.png";
import caroselStyles from "./carosel_styles.module.scss";
import ArrowL from "../icons/ArrowL";
import ArrowR from "../icons/ArrowR";
import { Product } from "@/app/page";
import Modal from "../Modal/Modal";

interface CarouselProps {
  products: Product[];
}

export default function Carousel({ products }: CarouselProps) {
  const [openProductModal, setOpenProductModal] = useState(false);
  const [currentProduct, setProducModalId] = useState<Product>(null);

  const openModal = (product: Product) => {
    setOpenProductModal(true);
    setProducModalId(product);

    console.log(openProductModal);
  };

  const closeModal = () => setOpenProductModal(false);

  return (
    <div>
      {openProductModal ? (
        <Modal product={currentProduct} onClose={closeModal} />
      ) : (
        <></>
      )}
      <CarouselHead />
      <div className={caroselStyles.crouselFex}>
        <ArrowL />
        {products.map((p) => (
          <CarouselCard product={p} onClick={openModal} />
        ))}
        <ArrowR />
      </div>
    </div>
  );
}
