import styles from "./style.module.css";
import { createPortal } from "react-dom";
import { RiCloseLine } from "react-icons/ri";

const Backdrop = ({ setIsOpen }: any) => {
  return (
    <div className={styles.backdrop} onClick={() => setIsOpen(false)}></div>
  );
};

const Overlay = ({ setIsOpen, handleDelete, message, id }: any) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}></div>
      <div className={styles.centered}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
      </div>
      <div className={styles.actionsContainer}>
        <h3 className={styles.heading}>{message}</h3>
      </div>
      <div className="flex items-center justify-center">
        {handleDelete && (
          <button
            className={`border-red-500 border-none p-3 ${styles['btn-accect-style']}`}
            onClick={(event) => {
              setIsOpen(false);
              handleDelete(event, id);
            }}
          >
            OK
          </button>
        )}
      </div>
    </div>
  );
};

const Modal: any = ({ setIsOpen, handleDelete, message, id }: any) => {
  return (
    <>
      {createPortal(
        //react node first argoment, second arg is a pointer.
        <Backdrop setIsOpen={setIsOpen} />,
        // DOM api as second argoment
        document.getElementById("backdrop") as HTMLElement
      )}
      {createPortal(
        <Overlay
          setIsOpen={setIsOpen}
          message={message}
          handleDelete={handleDelete}
          id={id}
        />,
        document.getElementById("overlay") as HTMLElement
      )}
    </>
  );
};

export default Modal;
