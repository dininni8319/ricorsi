import { useState, ChangeEvent } from 'react';

export default function useInput(
    initialSate: { [key: string]: string | number | any } ,
    slug?: number | string
) {
    let [data, setData] = useState(initialSate);
    const [ error, setError ] = useState('');
    const [ fileList, setFileList ] = useState<any>(null);
   
    const fileData = new FormData();
    const nome_file = fileList ? [...fileList] : [];
    
    nome_file.forEach((file, i) => {
        fileData.append(`file-${i}`, file, file.name);
    })
   
    data = {...data, nome_file}
    
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
            setData((prevState) => ({ ...prevState, [name]: val}));
        } else if (name === 'nome_file') {
            setFileList(e.target.files);
        } else {
            setError('');
            setData((prevState) => ({ ...prevState, [name]: value }));
        }
    };
    return {
        data,
        error,
        setError,
        handleData
    };
}
