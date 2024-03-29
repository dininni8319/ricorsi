import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../Utilities/index';
import { Search } from '../../UI/index';
import { ObjFormType } from '../../interfaces/interfaces';
import useHttp from '../../../Hooks/useHttp';
import useSearch from '../../../Hooks/useSearch';

const Searched = () => {
    const [searchedRicorsi, setSearchedRicorsi] = useState<any>([]);
    const {
        searchedTerm,
        selectedItem,
        cardId,
        handleSelectedItem,
        handleChange,
        handleResetSearch,
        handleNavigate
    } = useSearch(setSearchedRicorsi);

    const handleSearched = useCallback(
        ({ data }: { data: ObjFormType[] }) => {
            setSearchedRicorsi(() => [...data]);
        },
        [searchedTerm]
    );

    const {
        isLoading: loadingSearch,
        error: errSearch,
        sendRequest: fetchSearched
    } = useHttp(handleSearched);

    useEffect(() => {
        if (searchedTerm.length > 3) {
            fetchSearched({
                url: `/api/ricorsi/search=${searchedTerm}`
            });
        }
    }, [fetchSearched]);

    return (
        <Search
            title="Ente"
            handleChange={handleChange}
            handleResetSearch={handleResetSearch}
        >
            {searchedRicorsi?.map(
                (searched: { [key: string]: string }, id: number) => {
                    return (
                        <ul
                            className={`bg-white p-2 shadow-md ${
                                selectedItem && cardId === parseInt(searched.id)
                                    ? 'active-class'
                                    : ''
                            }`}
                            onMouseOver={() =>
                                handleSelectedItem(parseInt(searched?.id))
                            }
                            onClick={() =>
                                handleNavigate(
                                    'ricorsi_detail',
                                    parseInt(searched.id)
                                )
                            }
                            key={id}
                        >
                            <li>
                                <span className="font-semibold pr-2">
                                    Numero Ricorso:
                                </span>
                                {searched.numero_ricorso}
                            </li>
                            <li>
                                <span className="font-semibold pr-2">
                                    Ente:
                                </span>
                                {searched.ente}
                            </li>
                            <li>
                                <span className="font-semibold pr-2">
                                    Anno imposta:
                                </span>
                                {searched.anno_imposta}
                            </li>
                            <Link to={`/ricorsi_detail/${searched.id}`}>
                                Dettaglio Ricorso
                            </Link>
                        </ul>
                    );
                }
            )}
        </Search>
    );
};

export default Searched;
