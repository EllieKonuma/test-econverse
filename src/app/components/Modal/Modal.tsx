import React from "react";
import modalStyles from "./modal_styles.module.scss";
import { Product } from "@/app/page";
import { formatMoney } from "@/utils/formatMoney";

interface ModalProps {
  product: Product;
  onClose: () => void;
}

export default function Modal({ product, onClose }: ModalProps) {
  return (
    <div className={modalStyles.modal} onClick={() => onClose()}>
      <div
        className={modalStyles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={product.photo} />
        <div className={modalStyles.infoFlex}>
          <h2 className={modalStyles.h2}>{product.productName}</h2>
          <p className={modalStyles.pPrice}>
            {formatMoney.format(product.price)}
          </p>
          <p className={modalStyles.pInfo}>{product.descriptionShort}</p>
          <p className={modalStyles.pMoreinfo}>
            Veja mais detalhes do produto {">"}
          </p>
          <div className={modalStyles.caunter}>
            <p>+</p>
            <p>1</p>
            <p>-</p>
          </div>
          <button className={modalStyles.compraBtn}>COMPRAR</button>
        </div>

        <span className={modalStyles.close} onClick={() => onClose()}>
          &times;
        </span>
      </div>
    </div>
  );
}
