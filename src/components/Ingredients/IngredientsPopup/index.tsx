import React from "react";
import styles from "./popup.module.css";
import Ingredients from "../../Ingredients/index.tsx";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <div>
              <button onClick={onClose} className={styles.close}>
                X
              </button>
              {children}
              <Ingredients />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
