import styles from "./style.module.css";
import { createPortal } from "react-dom";
import { RiCloseLine } from "react-icons/ri";
import { defaultFasiData } from "../FormComponents/defaultData";
import { fasiFormData } from "../FormComponents/defaultProps";
import { Input, SelectInput, Form } from "../index";
import useInput from '../../../Hooks/useInput';

const Backdrop = ({ setIsOpen }: any) => {
  return <div className={styles.backdrop} onClick={() => setIsOpen(false)}></div>
}

const Overlay = ({ setIsOpen }:any ) => {
  const { data, handleData } = useInput(defaultFasiData);

  return (
      <div className={styles.modal}>
          {/* <div className={styles.modalHeader}>
            <h3 className={styles.heading}>Avvia una fase</h3>
          </div> */}
          <div className={styles.centered}>

          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px'}}/>
          </button>
          <Form
              title='Avvia una Fase' 
              navPath="/" 
              detailPath=""
              createPath='create_fase'
              subMitBtn='Invio'
              data={data}
          >
             <>
              
              {fasiFormData?.formArr.map(({ label, name, type }, index) => {
              return (
                  <Input
                      label={label}                       
                      name={name}
                      typeIn={type}
                      handleData={handleData}
                      index={index}
                      key={index}
                  />
              );
              })}
          
              {/* <div className='md:flex'>
                  <SelectInput
                      selectProps={selectPropsEsitoCartoline}
                      handleData={handleData}
                  />
              </div>  */}
            </>
      
          </Form>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>DELETE</button>
              <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>CANCEL</button>
            </div>
          </div>
        </div>
      </div>
  )
}

const Modal:any = ( { setIsOpen }:any) => {
   return (
     <> 
       {createPortal(
         <Backdrop  
          setIsOpen={setIsOpen}
         />, 
         document.getElementById( 'backdrop') as HTMLElement
       )}
       {
         createPortal(
         <Overlay 
         setIsOpen={setIsOpen}
         />,
         document.getElementById( 'overlay') as HTMLElement
         )}

     </>
   )
}

export default Modal;