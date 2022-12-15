import { useState, ChangeEvent } from 'react';

export default function useInput(
    initialSate: { [key: string]: string | number },
    slug?: number | string
) {
    const [data, setData] = useState(initialSate);

    const handleData = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
        index?: number
    ) => {
        let { name, value } = e.target;

        setData((prevState) => ({ ...prevState, [name]: value }));
    };
    return {
        data,
        handleData
    };
}
