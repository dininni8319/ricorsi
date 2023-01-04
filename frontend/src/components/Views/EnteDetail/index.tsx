import { useState, useEffect, useCallback, memo } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { EnteType } from '../../interfaces/interfaces';
import { baseURL } from '../../Utilities/index';
import useFetch from '../../../Hooks/useFetch';
import { DetailStyleComponent } from './style';
import useHttp from '../../../Hooks/useHttp';
import { WrapperStyleComponent } from '../Home/style';
import {
    Card,
    DetailPage,
    Loader3,
    ButtonDelete
} from '../../UI/index';
import Details from './details';
import CardDetails from './cardDetails';

const EnteDetail = () => {
    let { slug } = useParams();
    let navigate = useNavigate();
    const [currentFasis, setCurrentFasis] = useState<
        { [key: string]: string }[]
    >([]);

    let { payload } = useFetch(
        `${baseURL}/api/cienneffe/detail_ente/${slug}`,
        { verb: 'get' }
    );

    // const handleCurrentFasis = useCallback(({ data }: EnteType[]) => {
    //     setCurrentFasis(() => [...data]);
    // }, []);

    // const {
    //     // isLoading,
    //     // error,
    //     sendRequest: fetchCurrentFasis
    // } = useHttp(handleCurrentFasis);

    // useEffect(() => {
    //     fetchCurrentFasis({
    //         url: `${baseURL}/api/cienneffe/current_fasis/${slug}`
    //     });
    // }, [fetchCurrentFasis]);

    const handleDelete = (e: any, id?: number | string) => {
        e.preventDefault();
        
        deleteCard({
            url: `${baseURL}/api/cienneffe/delete/ente/${slug}`,
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        navigate('/');
    };
    const { sendRequest: deleteCard } = useHttp(handleDelete);

    let { data: ente }: any = payload;

    return (
        <DetailStyleComponent>
            <h1 className="mb-2 text-center pr-1">
                Tributo: <span>{ente?.descrizione_comune}</span>
            </h1>
            {ente ? (
                <DetailPage slug={slug}>
                    <>
                        <Details ente={ente} />

                        <section className="md:flex md:flex-col">
                            {/* <WrapperStyleComponent>
                                {currentFasis?.map((fase: Fasi, id: number) => {
                                    return (
                                        <Card
                                            id={id}
                                            taxunit={fase}
                                            path="fase/delete"
                                            current={currentFasis}
                                            setCurrent={setCurrentFasis}
                                        >
                                            <CardDetails
                                                fase={fase}
                                                currentId={currentId}
                                            />
                                        </Card>
                                    );
                                })}
                            </WrapperStyleComponent> */}
                            <section className="links-detail-page">
                                {/* //you can use a fragment or a custom wrapper */}
                                {ente && (
                                    <div className="flex justify-around items-end py-2">
                                        <Link
                                            to={`/form_dettaglio_ente/${ente?.id}`}
                                            className="primaryBtn"
                                        >
                                            Crea un nuovo servizio
                                        </Link>
                                        <Link
                                            to={`/form_ente/${ente?.id}`}
                                            className="mx-1"
                                        >
                                            Aggiorna l'ente
                                        </Link>
                                        <ButtonDelete
                                            handleDelete={handleDelete}
                                        />
                                    </div>
                                )}
                            </section>
                           
                        </section>
                    </>
                </DetailPage>
            ) : (
                <Loader3 />
            )}
        </DetailStyleComponent>
    );
};

export default memo(EnteDetail);
