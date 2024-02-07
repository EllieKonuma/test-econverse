import React from "react";
import modalStyles from "./modal_styles.module.scss";
import { Product } from "@/app/page";

interface ModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  return (
    <div className={modalStyles.modal} onClick={() => props.onClose()}>
      <div
        className={modalStyles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={modalStyles.close} onClick={() => props.onClose()}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}
