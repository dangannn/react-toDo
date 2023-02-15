import React from "react";
import styles from "./Modal.module.scss";

interface IModal {
  active: boolean;
  activeModal: (arg0: boolean) => void;
  children: any;
}
const Modal = ({ active, activeModal, children }: IModal) => {
  return (
    <div
      className={active ? styles.modal_active : styles.modal}
      onClick={() => activeModal(false)}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
