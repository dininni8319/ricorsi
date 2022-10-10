import { useState, ChangeEvent } from 'react';
import { validate } from "../components/Utilities/index";

export default function useInput(initialSate: {[key: string]: string}) {
  
  const [ data, setData ] = useState(initialSate);

  const handleData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, index?: number) => {
    // if (e.target.name === 'mail') {
    //   let email = {[e.target.name]:e.target.value};
    //   let errors = validate(email.mail)
    // }
    setData({...data, [e.target.name]:e.target.value});
}
  return {
    data,
    handleData,
  }
}
