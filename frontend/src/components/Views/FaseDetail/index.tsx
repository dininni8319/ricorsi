import { Link } from 'react-router-dom';
import { FasiFieldsTypes } from '../../interfaces/interfaces';
import { useState, useEffect, useCallback, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { baseURL } from '../../Utilities/index';
import useFetch from '../../../Hooks/useFetch';
import { DetailStyleComponent } from '../RicorsiDetail/style';
import { DetailPage, Loader3, DocumentComponent } from '../../UI/index';
import { faseCurrent, funFormatDate } from '../../Utilities/index';
import { ConfigContext } from '../../../Contexts/Config';
import useHttp from '../../../Hooks/useHttp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const FasiDetail = () => {
    const [faseDetail, setFaseDetail] = useState<FasiFieldsTypes | null>(null);
    const { slug } = useParams();
    let navigate = useNavigate();
    const {
        api_urls: { backend }
    } = useContext(ConfigContext);

    const handleFadeDetail = useCallback(
        ({ fase }: { fase: FasiFieldsTypes }) => {
            setFaseDetail(fase);
        },
        []
    );

    const { sendRequest: fetchFaseDetail } = useHttp(handleFadeDetail);

    useEffect(() => {
        fetchFaseDetail({
            url: `/api/detail_fase/${slug}`
        });
    }, [fetchFaseDetail]);

    let { payload: currentFase } = useFetch(
        `/api/last_fase/${faseDetail?.ricorsi_id}`,
        {
            verb: 'get'
        }
    );
    let { id: currentId }: any = currentFase;

    const handleDelete = (e: any) => {
        e.preventDefault();
        deleteCard({
            url: `/api/fase/delete/${slug}`,
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
                    Fase: <span>{faseCurrent(faseDetail?.fase)}</span>
                </h1>
                {faseDetail ? (
                    <DetailPage slug={slug}>
                        <ul className="ul-detail-style">
                            <li>
                                Presentato da:{' '}
                                <span>{faseDetail.presentato}</span>
                            </li>
                            <li>
                                Contro deduzioni Taxunit:{' '}
                                <span>
                                    {faseDetail.contro_deduzioni_tax_unit}
                                </span>
                            </li>
                            <li>
                                Contro deduzioni uff. Legale:{' '}
                                <span>
                                    {faseDetail.contro_deduzioni_uff_legale}
                                </span>
                            </li>
                            <li>
                                Data presentazione:{' '}
                                <span>
                                    {funFormatDate(
                                        faseDetail.data_presentazione
                                    )}
                                </span>
                            </li>
                            <li>
                                Sede: <span>{faseDetail.sede}</span>
                            </li>
                            <li>
                                Esito: <span>{faseDetail.esito}</span>
                            </li>
                            <li>
                                Esito definitivo:{' '}
                                <span>{faseDetail.esito_definitivo}</span>
                            </li>

                            <li>
                                Motivazione:{' '}
                                <span>{faseDetail.motivazione}</span>
                            </li>
                            <li>
                                Spese: <span>{faseDetail.spese}</span>
                            </li>
                            <li>
                                Data deposito Sentenza:{' '}
                                <span>
                                    {funFormatDate(
                                        faseDetail.data_deposito_sentenza
                                    )}
                                </span>
                            </li>
                            <li>
                                Data notifica Sentenza:{' '}
                                <span>
                                    {funFormatDate(
                                        faseDetail.data_notifica_sentenza
                                    )}
                                </span>
                            </li>
                        </ul>
                    </DetailPage>
                ) : (
                    <Loader3 />
                )}
            </>
              
            <section className="links-detail-page mt-5">
                {faseDetail && (
                    <div className="md:flex md:justify-between md:items-end py-2">
                        <Link to={`/ricorsi_detail/${faseDetail?.ricorsi_id}`}>
                            Dettaglio Ricorso
                        </Link>
                        {currentId === faseDetail?.id && (
                            <Link to={`/update_fase/${faseDetail?.ricorsi_id}`}>
                                Aggiorna la Fase
                            </Link>
                        )}
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
            <h2 className='pt-5 pb-2 text-xl'>Documentazione relativa alla fase</h2>
            <DocumentComponent documents={faseDetail?.documents}/>
        </DetailStyleComponent>
    );
};

export default FasiDetail;
