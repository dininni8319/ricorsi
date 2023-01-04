import { useState, useEffect, useCallback } from 'react';
import { ObjFormType } from '../../interfaces/interfaces';
import { baseURL } from '../../Utilities/index';
import useHttp from '../../../Hooks/useHttp';
import { Card, Loader3, Paginate } from '../../UI/index';
import { WrapperStyleComponent } from './style';
import Searched from './Searched';
import CardDetail from './CardDetail';
import { perPage } from '../../Utilities/index';

const Homepage = () => {
    const [enti, setEnti] = useState<ObjFormType[]>([]);

    const handleRicorsi = useCallback(({ data }: { data: ObjFormType[] }) => {
        setEnti(() => [...data]);
    }, []);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;
    const { pageCount, currentItems } = perPage(
        itemOffset,
        itemsPerPage,
        enti
    );

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % enti.length;
        setItemOffset(newOffset);
    };

    const {
        isLoading,
        error,
        sendRequest: fetchEnti
    } = useHttp(handleRicorsi);

    useEffect(() => {
        fetchEnti({ url: `${baseURL}/api/cienneffe/ricorsi` });
    }, [fetchEnti]);

    return (
        <div className="height-custom flex flex-col items-center">
            <>
                <Searched />
                <h1>Enti</h1>
                <div>
                    <Paginate
                        currentItems={currentItems}
                        pageCount={pageCount}
                        handlePageClick={handlePageClick}
                    />
                </div>
            </>
            <WrapperStyleComponent>
                <>
                    {currentItems && !isLoading ? (
                        currentItems?.map((ente: any, id: number) => {
                            return (
                                <>
                                    <Card
                                        taxunit={ente}
                                        id={id}
                                        path="ente/delete"
                                        current={enti}
                                        setCurrent={setEnti}
                                    >
                                        <CardDetail id={id} ente={ente} />
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
