import styles from "./style.module.css";
import { createPortal } from "react-dom";
import { RiCloseLine } from "react-icons/ri";
import { defaultFasiData } from "../FormComponents/defaultData";
import { fasiFormData } from "../FormComponents/defaultProps";
import { Input, SelectInput, Form } from "../index";
import useInput from "../../../Hooks/useInput";

const Backdrop = ({ setIsOpen }: any) => {

  return (
    <div className={styles.backdrop} onClick={() => setIsOpen(false)}></div>
  );
};

const Overlay = ({ setIsOpen, message }: any) => {
  return (
    <div className={styles.modal}>
    <div className={styles.modalHeader}></div>
      <div className={styles.centered}>
        <button
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
        >
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>    
      </div>
        <div className={styles.actionsContainer}>
          <h3 className={styles.heading}>{message}</h3>
        </div>
    </div>
  );
};

const Modal: any = ({ setIsOpen, message }: any) => {
  return (
    <>
      {createPortal(
        //react node first argoment, second arg is a pointer.
        <Backdrop setIsOpen={setIsOpen} />,
        // DOM api as second argoment
        document.getElementById("backdrop") as HTMLElement
      )}
      {createPortal(
        <Overlay setIsOpen={setIsOpen} message={message} />,
        document.getElementById("overlay") as HTMLElement
      )}
    </>
  );
};

export default Modal;
