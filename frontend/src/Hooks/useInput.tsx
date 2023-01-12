import { useState, ChangeEvent } from 'react';

export default function useInput(
    initialSate: { [key: string]: string | number | any } ,
    slug?: number | string
) {
    let [ data, setData ] = useState(initialSate);
    const [ error, setError ] = useState('');

    const formData = new FormData();
    
    for (let key in data) {
        formData.append(key, data[key]); 
    }
    
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
            let files = e.target.files
           
            if (files.length > 1) {
                handleUploadFiles(files);
            } else {
                setData((prevState) => ({...prevState, 'nome_file': files[0]}));
            }
            
        } else {
            setError('');
            setData((prevState) => ({...prevState, [name]: value }));
        }
    };
    return {
        data,
        formData,
        error,
        setError,
        handleData
    };
}
