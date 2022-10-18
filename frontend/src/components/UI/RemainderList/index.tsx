import { funFormatDate } from "../../Utilities/index";
import { baseURL } from "../../Utilities/index";
import { useState } from "react";
import { Modal } from "../index";

const RemainderList = ({ tasks, setTasks }: { tasks: any, setTasks:any }) => {
  const [ isSure, setSure ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ message, setMessage ] = useState('');

  const handleDelete = (event: any, id: number) => {
    event.preventDefault(); 

    if (!isSure) {
      setIsOpen(prev => prev = true);
      setMessage('Are you sure you want delete this Reminder!')
    }

    if (isSure) {
      
      fetch(`${baseURL}/api/cienneffe/task/delete/${id}}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(data => {
        if (data.success === true) {
          setMessage(data.message)
          setIsOpen(true);
          setTasks((prev: any) => [...prev.filter((el: any) => el.id !== data.task.id)])  
          setTimeout(() => {
            setIsOpen(false);
          },2000)
        }
      })
    }
    
  }

  return (
      <div className='md:flex md:flex-wrap w-10/12'>
       {tasks?.map((el: any) => {
           return(
             <>
              <ul className='bg-white shadow-lg p-4 m-2 text-sm' key={el.id}>
                <li><span className='font-semibold mr-1'>Reminder at:</span>{funFormatDate(el.reminder_at)}</li>
                <li><span className='font-semibold mr-1'>Scadenza del compito:</span>{funFormatDate(el.scadenza_del_compito)}</li>
                <li><span className='font-semibold mr-1'>Descrizione del compito:</span>{el.descrizione_compito}</li>
                <li><span className='font-semibold mr-1'>Creato il:</span>{funFormatDate(el.created_at)}</li>
                <button onClick={(e) => handleDelete(e, el.id)} className='bg-red-500 text-white my-2 p-1'>Delete</button>
              </ul>
            </>
           ) 
       })}
        {isOpen && <Modal setIsOpen={setIsOpen} message={message} setSure={setSure}/>}
      </div>
  );
}

export default RemainderList;