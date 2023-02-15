import { useState, useEffect, useContext, useCallback, memo } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ServizioType } from '../../interfaces/interfaces';
import { ConfigContext } from "../../../Contexts/Config";
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
    const { slug } = useParams();
    const { api_urls: { backend } } = useContext(ConfigContext)
    const navigate = useNavigate();
    const [currentServices, setCurrentServices] = useState<
    ServizioType[]
    >([]);
    
    let { payload } = useFetch(
        `${backend}/api/cienneffe/detail_ente/${slug}`,
        { verb: 'get' }
    );

    const handleCurrentServices = useCallback(({ servizi }: {servizi: ServizioType[]}) => {
        setCurrentServices(() => [...servizi]);
    }, []);

    const {
        sendRequest: fetchCurrentServices
    } = useHttp(handleCurrentServices);

    useEffect(() => {
        fetchCurrentServices({
            url: `${backend}/api/cienneffe/all/services/${slug}`
        });
    }, [fetchCurrentServices]);

    const handleDelete = (e: any, id?: number | string) => {
        e.preventDefault();
        
        deleteCard({
            url: `${backend}/api/cienneffe/delete/ente/${slug}`,
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        navigate('/ente');
    };
    const { sendRequest: deleteCard } = useHttp(handleDelete);

    let { data: ente }: any = payload;

    return (
        <DetailStyleComponent>
            <h1 className="mb-2 text-center pr-1">
                Descrizione comune: <span>{ente?.descrizione_comune}</span>
            </h1>
            {ente ? (
                <DetailPage slug={slug}>
                    <>
                        <Details ente={ente} />

                        <section className="md:flex md:flex-col">
                            <WrapperStyleComponent>
                                {currentServices?.map((servizio: ServizioType, id: number) => {
                                    return (
                                        <Card
                                            id={id}
                                            taxunit={servizio}
                                            path="servizio/delete"
                                            current={currentServices}
                                            setCurrent={setCurrentServices}
                                        >
                                            <CardDetails
                                                servizio={servizio}
                                            />
                                        </Card>
                                    );
                                })}
                            </WrapperStyleComponent>
                            <section className="links-detail-page">
                                {ente && (
                                    <div className="flex justify-around items-end py-2">
                                        <Link
                                            to={`/form_dettaglio_ente/${ente?.id}`}
                                            className="primaryBtn"
                                        >
                                            Crea un nuovo servizio
                                        </Link>
                                        <Link
                                            to={`/update_ente/${ente?.id}`}
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
