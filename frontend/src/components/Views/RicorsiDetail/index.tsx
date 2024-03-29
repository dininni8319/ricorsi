import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Fasi } from '../../interfaces/interfaces';
import { baseURL } from '../../Utilities/index';
import useFetch from '../../../Hooks/useFetch';
import { DetailStyleComponent } from './style';
import useHttp from '../../../Hooks/useHttp';
import useApiRequest from '../../state/useApiRequest';
import { WrapperStyleComponent } from '../Home/style';
import {
    Card,
    DetailPage,
    Loader3,
    RemainderForm,
    ButtonDelete
} from '../../UI/index';
import Details from './details';
import CardDetails from './cardDetails';

const RicorsiDetail = () => {
    let { slug } = useParams();
    let navigate = useNavigate();
    const [currentFasis, setCurrentFasis] = useState<
        { [key: string]: string }[]
    >([]);

    let { payload } = useFetch(
        `/api/detail_ricorso/${slug}`,
        { verb: 'get' }
    );

    const handleCurrentFasis = useCallback(({ fasi }: any) => {
        setCurrentFasis(() => [...fasi]);
    }, []);

    const {
        isLoading,
        error,
        sendRequest: fetchCurrentFasis
    } = useHttp(handleCurrentFasis);

    useEffect(() => {
        fetchCurrentFasis({
            url: `/api/current_fasis/${slug}`
        });
    }, [fetchCurrentFasis]);

    let { payload: currentFase } = useFetch(
        `/api/last_fase/${currentFasis[0]?.ricorsi_id}`,
        {
            verb: 'get'
        }
    );

    let { id: currentId, lastFase  }: any = currentFase;

    const [{ status, response }, makeRequest] = useApiRequest(
        `/api/ricorso/delete/${slug}`,
        {
            verb: 'delete'
        }
    );

    let { data: ricorso}: any = payload;
    
    const handleDelete = (e: any, id?: number) => {
        e.preventDefault();
        makeRequest();
        navigate('/');
    };

    return (
        <DetailStyleComponent>
            <h1 className="mb-2 text-center pr-1">
                Tributo: <span>{ricorso?.tributo}</span>
            </h1>
            {ricorso ? (
                <DetailPage slug={slug}>
                    <>
                        <Details ricorso={ricorso} />

                        <section className="md:flex md:flex-col">
                            <WrapperStyleComponent>
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
                            </WrapperStyleComponent>
                            <section className="links-detail-page">
                                {ricorso && (
                                    <div className="flex justify-around items-end py-2">
                                       {lastFase?.fase !== 4 && <Link
                                            to={`/form_fase/${ricorso?.id}`}
                                            className="primaryBtn"
                                        >
                                            Avvia una Fase
                                        </Link>}
                                        <Link
                                            to={`/update_ricorso/${ricorso?.id}`}
                                            className="mx-1"
                                        >
                                            Aggiorna Ricorso
                                        </Link>
                                        <ButtonDelete
                                            handleDelete={handleDelete}
                                        />
                                    </div>
                                )}
                            </section>
                            <RemainderForm slug={slug} />
                        </section>
                    </>
                </DetailPage>
            ) : (
                <Loader3 />
            )}
        </DetailStyleComponent>
    );
};

export default RicorsiDetail;
