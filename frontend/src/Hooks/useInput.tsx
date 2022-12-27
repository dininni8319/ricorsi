import { useState, ChangeEvent } from 'react';

export default function useInput(
    initialSate: { [key: string]: string | number },
    slug?: number | string
) {
    const [data, setData] = useState(initialSate);
    
    const handleData = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any
        >,
        index?: number
    ) => {
        let { name, value, checked } = e.target;
        if (name === 'email_notification') {
            let val = checked ? 'on' : '';
            // console.log('====================================');
            // console.log(name === 'email_notification', checked, val);
            // console.log('====================================');
            setData((prevState) => ({ ...prevState, [name]:  val}));
        } else {
            setData((prevState) => ({ ...prevState, [name]: value }));
        }
    
    };
    return {
        data,
        handleData
    };
}
