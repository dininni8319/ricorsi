import { useState, ChangeEvent } from 'react';

export default function useInput(initialSate: {[key: string]: string}) {

  const [ data, setData ] = useState(initialSate);
  const [ errors, setErrors ] = useState({
    status: false,
    message: ''
  });
  
  const handleData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, index?: number) => {
    if (e.target.name === 'nominativo' && e.target.value.length < 1) {    
      setErrors({
        status: true,
        message: 'Il nominativo non deve essere vuoto!'
      });
    } else {

      setErrors({
        status: false,
        message: ''
      });
      setData({...data, [e.target.name]:e.target.value});
    }  
};
  return {
    data,
    handleData,
    errors,
  }
}
