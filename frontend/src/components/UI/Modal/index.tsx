import styles from "./style.module.css";
import { createPortal } from "react-dom";
import { RiCloseLine } from "react-icons/ri";

const Backdrop = ({ setIsOpen }: any) => {

  return (
    <div className={styles.backdrop} onClick={() => setIsOpen(false)}></div>
  );
};

const Overlay = ({ setIsOpen, setSure, message }: any) => {
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
        {setSure && <button className='btn bg-red-500' onClick={() => {
          setSure((prev: any) => prev = true)
          setIsOpen(false)
        }}>OK</button>}
    </div>
  );
};

const Modal: any = ({ setIsOpen, setSure, message }: any) => {
  return (
    <>
      {createPortal(
        //react node first argoment, second arg is a pointer.
        <Backdrop setIsOpen={setIsOpen} />,
        // DOM api as second argoment
        document.getElementById("backdrop") as HTMLElement
      )}
      {createPortal(
        <Overlay setIsOpen={setIsOpen} message={message} setSure={setSure} />,
        document.getElementById("overlay") as HTMLElement
      )}
    </>
  );
};

export default Modal;
