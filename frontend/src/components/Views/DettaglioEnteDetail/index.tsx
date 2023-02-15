import { Link } from 'react-router-dom';
import { ServizioType } from '../../interfaces/interfaces';
import { useState, useEffect, useCallback, useContext, memo } from 'react';
import { useParams, useNavigate } from 'react-router';
import { baseURL } from '../../Utilities/index';
import { DetailStyleComponent } from '../RicorsiDetail/style';
import { DetailPage, Loader3 } from '../../UI/index';
import { ConfigContext } from '../../../Contexts/Config';
import useHttp from '../../../Hooks/useHttp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DettaglioEnteDetail = () => {
    const [servizioDetail, setServizioDetail] = useState<any>();
    const { slug } = useParams();
    let navigate = useNavigate();
    const {
        api_urls: { backend }
    } = useContext(ConfigContext);

    const handleServizioDetail = useCallback(
        ({ data }: { data: ServizioType }) => {
            setServizioDetail(data);
        },
        []
    );
    
    const { sendRequest: fetchServizioDetail } = useHttp(handleServizioDetail);

    useEffect(() => {
        fetchServizioDetail({
            url: `${backend}/api/cienneffe/detail_servizio/${slug}`
        });
    }, [fetchServizioDetail]);

    const handleDelete = (e: any) => {
        e.preventDefault();
        deleteCard({
            url: `${baseURL}/api/cienneffe/servizio/delete/${slug}`,
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        navigate('/');
    };

    const { sendRequest: deleteCard } = useHttp(handleDelete);

    return (
        <DetailStyleComponent>
            <>
                <h1 className="mb-2 text-center">
                    Tipologia servizi: <span>{servizioDetail?.tipologia_servizi}</span>
                </h1>
                {servizioDetail ? (
                    <DetailPage slug={slug}>
                        <ul className="ul-detail-style">
                            <li>
                                Tipologia di attività:{' '}
                                <span>{servizioDetail.tipologia_attivita}</span>
                            </li>
                            <li>
                                Contro deduzioni Taxunit:{' '}
                                <span>
                                    {servizioDetail.aggio}
                                </span>
                            </li>
                            <li>
                                Contro deduzioni uff. Legale:{' '}
                                <span>
                                    {servizioDetail.spese_postali}
                                </span>
                            </li>
                            <li>
                                Sede: <span>{servizioDetail.oneri}</span>
                            </li>
                            <li>
                                Esito: <span>{servizioDetail.altri_diritti}</span>
                            </li>
                            <li>
                                Esito definitivo:{' '}
                                <span>{servizioDetail.cig}</span>
                            </li>
                        </ul>
                    </DetailPage>
                ) : (
                    <Loader3 />
                )}
            </>
              
            <section className="links-detail-page mt-5">
                <div className="md:flex md:justify-between md:items-end py-2">
                    <Link to={`/detail_ente/${servizioDetail?.ente_id}`}>
                        Dettaglio Ente
                    </Link>
                    <Link to={`/update_servizio/${servizioDetail?.id}`}>
                        Aggiorna questo servizio
                    </Link>
                    
                    <button
                            onClick={(event) => handleDelete(event)}
                            className="text-red-600 outline-none cursor-pointer w-18 px-3 py-2 font-semibold"
                        >
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                                className={`fa-1x`}
                            />
                    </button>
                </div>
            </section>
        </DetailStyleComponent>
    );
};

export default memo(DettaglioEnteDetail);
