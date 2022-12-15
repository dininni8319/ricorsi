import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router';

const useSearch = (setSearchedData: any) => {
    const [searchedTerm, setSearchedTerm] = useState('');
    const [selectedItem, setSelectedItem] = useState(false);
    const [cardId, setCardId] = useState<number>(0);
    const navigate = useNavigate();

    const handleResetSearch = (e: any) => {
        let val = (e.target.value = '');
        setSearchedTerm(() => val);
        setSearchedData([]);
    };

    const handleSelectedItem = (id: number) => {
        if (id) {
            setSelectedItem(true);
            setCardId(id);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchedTerm(e.target.value);
    };

    const handleNavigate = (path: string, id: number) => {
        navigate(`/${path}/${id}`);
    };

    return {
        searchedTerm,
        selectedItem,
        cardId,
        setSearchedTerm,
        handleSelectedItem,
        handleChange,
        handleResetSearch,
        handleNavigate
    };
};

export default useSearch;
