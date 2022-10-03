import { useState, ChangeEvent } from 'react';

export default function useInput(initialSate: {[key: string]: string}) {

  const [ data, setData ] = useState(initialSate);

  const handleData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, index?: number) => {
    setData({...data, [e.target.name]: 
    e.target.value});
};
  return {
    data,
    handleData,
  }
}
