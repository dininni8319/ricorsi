import { useState, ChangeEvent } from 'react';

export default function useInput(
    initialSate: { [key: string]: string | number | any } ,
    slug?: number | string
) {
    let [ data, setData ] = useState(initialSate);
    const [ error, setError ] = useState('');
    
    const handleUploadFiles = (files: any) =>  {
      const uploaded = [...files];
  
      setData((prevState) => ({...prevState, 'nome_file': uploaded}));
    }

    const handleData = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any
        >,
        index?: number
    ) => {
        let { name, value, checked } = e.target;
        if (name === 'email_notification') {
            let val = checked ? 'on' : '';
            setError('');
            setData((prevState) => ({...prevState, [name]: val}));
        } else if (name === 'nome_file') {
            const chosenFiles = Array.prototype.slice.call(e.target.files);
            
            handleUploadFiles(chosenFiles);
        } else {
            setError('');
            setData((prevState) => ({...prevState, [name]: value }));
        }
    };
    return {
        data,
        error,
        setError,
        handleData
    };
}
