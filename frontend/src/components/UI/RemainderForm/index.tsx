import { Input, SelectInput } from "../";
import { baseURL } from "../../Utilities/index";
import { selectTasks } from "../FormComponents/selectPropsTributi";
import { defaultRemainderData } from "../FormComponents/defaultData";
import useInput from "../../../Hooks/useInput";
import { RemainderStyleComponent } from "./style";
import { useNavigate } from "react-router";
import { memo, useState } from "react";
import { Modal } from '../index';

const RemainderForm = ({ slug }: { slug?: string }) => {
  const navigate = useNavigate();
  const [ isOpen, setIsOpen ] = useState(false);
  const [ message, setMessage ] = useState('')
   console.log(isOpen);
     
  const handleOpen = (event: any) => {
    event.preventDefault();
    setIsOpen(prev => !prev);
  }
  const { data, handleData } = useInput(defaultRemainderData);
  console.log("testing the rendering");

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`${baseURL}/api/cienneffe/taskrimender/${slug}}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          setMessage(data.message);
          setIsOpen(true);
        
        } else {
          // setMessage(data.message);
          // setIsOpen(true);
          navigate(`/ricorsi_detail/${slug}`);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <RemainderStyleComponent>
      <form className="p-5 bg-white mt-3 mb-5 task-remainer shadow-lg" onSubmit={HandleSubmit}>
        <section className="mb-3 flex flex-col mx-3">
          <h5 className="font-bold">Invia una notifica</h5>
          <div className="">
            <Input
              type="date"
              label="Scadenza del Compito"
              name="scadenza_del_compito"
              handleData={handleData}
            />
            <Input
              type="text"
              label="Descrizione Compito"
              name="descrizione_compito"
              handleData={handleData}
            />
          </div>
          <div className="md:flex md:flex-col">
            <SelectInput selectProps={selectTasks} handleData={handleData} />
            <button className="btn-send border-solid bg-orange-500 text-white mt-5 py-2 w-full">
              Inserisci
            </button>
          </div>
        </section>
      </form>
      {isOpen && <Modal setIsOpen={setIsOpen} message={message}/>}
    </RemainderStyleComponent>
  );
};

export default memo(RemainderForm);
