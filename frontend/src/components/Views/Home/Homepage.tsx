import { useState, useEffect, useCallback } from 'react';
import { ObjFormType } from '../../interfaces/interfaces';
import { baseURL } from '../../Utilities/index';
import useHttp from '../../../Hooks/useHttp';
import { Card, Loader3, Paginate } from '../../UI/index';
import { WrapperStyleComponent } from './style';
import Searched from './Searched';
import CardDetail from './CardDetail';
import { perPage } from '../../Utilities/index';
const DoneImg = require('../../../assets/icons/icon-done.png');

const Homepage = () => {
    const [ricorsi, setRicorsi] = useState<ObjFormType[]>([]);

    const handleRicorsi = useCallback(({ data }: { data: ObjFormType[] }) => {
        setRicorsi(() => [...data]);
    }, []);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;
    const { pageCount, currentItems } = perPage(
        itemOffset,
        itemsPerPage,
        ricorsi
    );
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % ricorsi.length;
        setItemOffset(newOffset);
    };

    const {
        isLoading,
        error,
        sendRequest: fetchRicorsi
    } = useHttp(handleRicorsi);

    useEffect(() => {
        fetchRicorsi({ url: `/api/ricorsi` });
    }, [fetchRicorsi]);

    return (
        <div className="height-custom flex flex-col items-center">
            <>
                <Searched />
                <h1>Ricorsi</h1>
                <div>
                    <Paginate
                        currentItems={currentItems}
                        pageCount={pageCount}
                        handlePageClick={handlePageClick}
                    />
                </div>
                <div className='flex justify-center'>
                  {currentItems.length === 0 && !isLoading && <img src={DoneImg} alt="done image"  width='200px' height='200px'/>}
                </div>
            </>
            <WrapperStyleComponent>
                <> 
                    {currentItems && !isLoading ? (
                        currentItems?.map((ricorso: any, id: number) => {
                            return (
                                <>
                                    <Card
                                        taxunit={ricorso}
                                        id={id}
                                        path="ricorso/delete"
                                        current={ricorsi}
                                        setCurrent={setRicorsi}
                                    >
                                        <CardDetail id={id} ricorso={ricorso} />
                                    </Card>
                                </>
                            );
                        })
                    ) : (
                        <Loader3 />
                    )}
                </>
            </WrapperStyleComponent>
        </div>
    );
};

export default Homepage;
