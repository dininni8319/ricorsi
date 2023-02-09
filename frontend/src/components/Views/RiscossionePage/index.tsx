import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IRiscossione } from '../../interfaces/interfaces';
import { baseURL } from '../../Utilities/index';
import { Card, Loader3, Search, Paginate, NotificheTotali, ExportCSV } from '../../UI/index';
import { WrapperStyleComponent } from '../Home/style';
import { funFormatDate, perPage } from '../../Utilities/index';
import useSearch from '../../../Hooks/useSearch';
import CardDetails from './CardDetails';

const DoneImg = require('../../../assets/icons/icon-done.png');
const RiscossionePage = () => {
    const [riscossioni, setRiscossioni] = useState<IRiscossione[]>([]);
    const [searchedRiscossione, setSearchedRiscossione] = useState<any>([]);
    const {
        searchedTerm,
        selectedItem,
        cardId,
        handleSelectedItem,
        handleChange,
        handleResetSearch,
        handleNavigate
    } = useSearch(setSearchedRiscossione);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;
    const { pageCount, currentItems } = perPage(
        itemOffset,
        itemsPerPage,
        riscossioni
    );

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % riscossioni.length;
        setItemOffset(newOffset);
    };
    
    useEffect(() => {
        fetch(`/api/riscossione`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data) {
                    setRiscossioni(() => [...data?.data]);
                }
            })
            .catch((error: unknown) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (searchedTerm.length > 3) {
            fetch(`/api/riscossione/search=${searchedTerm}`)
                .then((response) => response.json())
                .then((data) => setSearchedRiscossione(data?.data))
                .catch((error: unknown) => {
                    console.log(error);
                });
        }
    }, [searchedTerm]);

    return (
        <div className="height-custom flex flex-col items-center">
            <>
                <Search
                    title="Riscossione"
                    handleChange={handleChange}
                    handleResetSearch={handleResetSearch}
                >
                    {searchedRiscossione
                        ?.slice(0, 6)
                        .map((searched: { [key: string]: string }) => {
                            return (
                                <ul
                                    key={searched.id}
                                    className={`bg-white p-2 shadow-md border-slate-400 ${
                                        selectedItem &&
                                        cardId === parseInt(searched.id)
                                            ? 'active-class'
                                            : ''
                                    }`}
                                    onMouseOver={() =>
                                        handleSelectedItem(
                                            parseInt(searched?.id)
                                        )
                                    }
                                    onClick={() =>
                                        handleNavigate(
                                            'detail_riscossione',
                                            parseInt(searched.id)
                                        )
                                    }
                                >
                                    <li>
                                        <span className="font-semibold pr-1">
                                            Descrizione Spedizione:
                                        </span>
                                        {searched.descrizione_spedizione}
                                    </li>
                                    <li>
                                        <span className="font-semibold pr-1">
                                            Notifiche Positive:
                                        </span>
                                        {searched.notifiche_positive}
                                    </li>
                                    <li>
                                        <span className="font-semibold pr-1">
                                            Data di Consegna al Service:
                                        </span>
                                        {funFormatDate(
                                            searched.data_consegna_service
                                        )}
                                    </li>
                                    <Link
                                        to={`/detail_riscossione/${searched.id}`}
                                    >
                                        Dettaglio Lotto di Spedizione
                                    </Link>
                                </ul>
                            );
                        })}
                </Search>
                <h1>Lotto di Spedizione</h1>
                <Paginate
                    currentItems={currentItems}
                    pageCount={pageCount}
                    handlePageClick={handlePageClick}
                />
                <div className='md:flex w-full items-end justify-center'>
                    <NotificheTotali />
                    <ExportCSV />
                </div>
                <div className='flex justify-center'>
                  {currentItems.length === 0 && <img src={DoneImg} alt="done image"  width='200px' height='200px'/>}
                </div>
            </>
            <WrapperStyleComponent>
                <>
                    {riscossioni ? (
                        riscossioni?.map(
                            (riscossione: IRiscossione, id: number) => {
                                return (
                                    <>
                                        <Card
                                            id={id}
                                            key={id}
                                            taxunit={riscossione}
                                            path="riscossione/delete"
                                            current={riscossioni}
                                            setCurrent={setRiscossioni}
                                        >
                                           <CardDetails  riscossione={riscossione} />
                                        </Card>
                                    </>
                                );
                            }
                        )
                    ) : (
                        <Loader3 />
                    )}
                </>
            </WrapperStyleComponent>
        </div>
    );
};

export default RiscossionePage;
