import { Link } from 'react-router-dom';
import { FasiFieldsTypes } from '../../interfaces/interfaces';
import { useState, useEffect, useCallback, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { baseURL } from '../../Utilities/index';
import useFetch from '../../../Hooks/useFetch';
import { DetailStyleComponent } from '../RicorsiDetail/style';
import { DetailPage, Loader3 } from '../../UI/index';
import { faseCurrent, funFormatDate } from '../../Utilities/index';
import { ConfigContext } from '../../../Contexts/Config';
import useHttp from '../../../Hooks/useHttp';

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
            url: `${backend}/api/cienneffe/detail_fase/${slug}`
        });
    }, [fetchFaseDetail]);

    let { payload: currentFase } = useFetch(
        `${backend}/api/cienneffe/last_fase/${faseDetail?.ricorsi_id}`,
        {
            verb: 'get'
        }
    );
    let { id: currentId }: any = currentFase;

    const handleDelete = (e: any) => {
        e.preventDefault();
        deleteCard({
            url: `${baseURL}/api/cienneffe/fase/delete/${slug}`,
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
            <ul className='ul-files-class'>
                {
                    faseDetail?.documents.map((document: any) => {
                        return (
                            <li key={document.id} className='files-style'>
                            <a href={`http://localhost:8000/${document.path}`} target='_blank'>{document.nome_file}</a> 
                            </li> 
                        )
                    })
                }
            </ul>
              
            <section className="links-detail-page mt-5">
                {faseDetail && (
                    <div className="md:flex md:justify-between md:items-end py-2">
                        <Link to={`/ricorsi_detail/${faseDetail?.ricorsi_id}`}>
                            Dettaglio Ricorso
                        </Link>
                        {currentId === faseDetail?.id && (
                            <Link to={`/form_fase/${faseDetail?.ricorsi_id}`}>
                                Aggiorna la Fase
                            </Link>
                        )}
                        <>
                            <button
                                onClick={(event) => handleDelete(event)}
                                className="bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold"
                            >
                                Cancella
                            </button>
                        </>
                    </div>
                )}
                
            </section>
        </DetailStyleComponent>
    );
};

export default FasiDetail;
