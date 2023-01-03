import { useState, useEffect, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router';
import useFetch from '../../../Hooks/useFetch';
import useHttp from '../../../Hooks/useHttp';
import { DetailPage, Loader3, Card } from '../../UI/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ConfigContext } from '../../../Contexts/Config';
import Details from './Details';
import DetailsCard from './DetailsCard';
import { DetailStyleComponent } from "../RicorsiDetail/style";
import { WrapperStyleComponent } from "../Home/style";

const LottiSpedizioneDetail = () => {
    const [ riconcil, setRiconcil] = useState<{ [key: string]: string }[]>([]);
    let { slug } = useParams();
    let navigate = useNavigate();
    const {
        api_urls: { backend }
    } = useContext(ConfigContext);
    let { payload, setData } = useFetch(
        `${backend}/api/cienneffe/detail_riscossione/${slug}`,
        { verb: 'get' }
    );

    const handleCurrentRiconcil = useCallback(({ data }: any) => {
        setRiconcil(() => [...data]);
    }, []);

    const {
        isLoading,
        error,
        sendRequest: fetchCurrentRiconcil
    } = useHttp(handleCurrentRiconcil);

    useEffect(() => {
        fetchCurrentRiconcil({
            url: `${backend}/api/cienneffe/riconciliazione/find/${slug}`
        });
    }, [fetchCurrentRiconcil]);

    let { data: riscossione }: any = payload;

    const handleDelete = (e: any) => {
        e.preventDefault();
        deleteLotto({
            url: `${backend}/api/cienneffe/cartolina/delete/${slug}`,
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        navigate('/');
    };
    const { sendRequest: deleteLotto } = useHttp(handleDelete);

    return (
        <DetailStyleComponent>
            <>
                <h1 className="mb-2 text-center">
                    Descrizione della Riscossione:{' '}
                    <span>{riscossione?.descrizione_spedizione}</span>
                </h1>
                {riscossione ? (
                    <DetailPage slug={slug}>
                        <Details riscossione={riscossione} />
                    </DetailPage>
                ) : (
                    <Loader3 />
                )}
            </>

            <section className="md:flex md:flex-col">
                            <WrapperStyleComponent>
                                {riconcil?.map((riconcil: any, id: number) => {
                                    return (
                                        <Card
                                            id={id}
                                            taxunit={riconcil}
                                            path="fase/delete"
                                            
                                        >
                                           <DetailsCard  riconcil={riconcil}/>
                                        </Card>
                                    );
                                })}
                            </WrapperStyleComponent>
            </section>
            <section className="links-detail-page mt-5">
                {riscossione && (
                    <div className="md:flex md:justify-between md:items-end py-2">
                        <Link
                            to={`/form_rendicondazione/${slug}`}
                            className="primaryBtn"
                        >
                            Avvia una Rendicontazione
                        </Link>
                        <Link to={`/update_riscossione/${slug}`}>
                            Aggiorna la Riscossione
                        </Link>
                        <>
                            <button
                                onClick={(event) => handleDelete(event)}
                                className="text-red-600 outline-none cursor-pointer w-18 px-3 py-2 font-semibold"
                            >
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    className={`fa-1x`}
                                />
                            </button>
                        </>
                    </div>
                )}
            </section>
        </DetailStyleComponent>
    );
};

export default LottiSpedizioneDetail;
