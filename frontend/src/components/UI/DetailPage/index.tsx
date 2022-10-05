import { RicorsoProps, FasiListProps, Fasi } from "../../interfaces/interfaces";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useLayoutEffect, useState } from "react";
import Modal from "../Modal";
import { baseURL } from '../../Utilities/index'
import useFetch from '../../../Hooks/useFetch';
import Card from "../Card";
import { WrapperStyleComponent } from "../../Views/Home/style";
import useApiRequest from '../../state/useApiRequest';
import { memo } from "react";

const DetailPage = ( { ricorso, slug }: RicorsoProps) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const navigate = useNavigate();

    let { payload }:{ payload: FasiListProps }  = useFetch(`${baseURL}/api/cienneffe/current_fasis/${slug}`, {
        verb: 'get',      
    });

   
    let fasi = payload.fasi
    // current_fasis

    return (
        <>
            <ul className="ul-detail-style">
                <li>
                    <strong>Nominativo:</strong><span>{ricorso.nominativo}</span>
                </li>
                <li>
                    <strong>Numero Ricorso:</strong><span>{ricorso.numero_ricorso}</span>
                </li>
                <li>
                    <strong>Tributo:</strong><span>{ricorso.tributo}</span>
                </li>
                <li>
                    <strong>Ente:</strong><span>{ricorso.ente}</span> 
                </li>
                <li>
                    <strong>Anno imposta:</strong><span>{ricorso.anno_imposta}</span>
                </li>
                <li>
                    <strong>Importo Atto:</strong><span>{ricorso.importo_atto}</span>
                </li>
                <li>
                    <strong>Esito:</strong><span>{ricorso.esito}</span>
                </li>

                <li>
                    <strong>Numero di protocollo interno:</strong><span>{ricorso.numero_protocollo_interno}</span>
                </li>
                <li>
                    <strong>Indirizzo:</strong><span>{ricorso.indirizzo}</span>
                </li>
                <li>
                    <strong>Email:</strong><span>{ricorso.mail}</span>
                </li>
                <li>
                    <strong>Telefono:</strong><span>{ricorso.telefono}</span>
                </li>

                <li>
                    <strong>Cod. Fiscale/P.Iva:</strong><span>{ricorso.cf_piva}</span>
                </li>
                <li>
                    <strong>Cod. Fiscale/P.Iva:</strong><span>{ricorso.tipologia_atto}</span>
                </li>
                <li>
                  <p className='font-serif mt-5'><strong>Oggetto Ricorso:</strong> <span>{ricorso.oggetto_ricorso}</span></p>
                </li>
            </ul>
            <section className='flex justify-center'>
                <WrapperStyleComponent>
                    {fasi?.map((fase:Fasi, id: number) => {
                            return (
                                <Card
                                    taxunit={fase}
                                    key={id}
                                    path='fase/delete'
                                >
                                <>
                                    <h3 className="card-title mb-2">Fase corrente: <span>{fase.fase}</span></h3>
                                    <ul className="border-custom">
                                    <li>Esito: <span>{fase.esito}</span></li>
                                    <li>Esito definitivo: <span>{fase.esito_definitivo}</span></li>
                                    <li>Sede: <span>{fase.sede}</span></li>
                                    <li>Spese: <span>{fase.spese}</span></li>
                                    <li>Data presentazione: <span>{fase.data_presentazione}</span></li>
                                    <li>Data convocazione: <span>{fase.data_convocazione}</span></li>
                                    </ul>
                                    <div className='flex justify-between py-1'>
                                        <Link to={`/form_fase/${fase.id}`}>Aggiorna la Fase</Link>
                                        <Link to={`/ricorsi_detail/${fase.id}`}>Dettaglio Fase</Link>
                                    </div>
                                </>
                                </Card>
                            )
                        }) 
                    } 
                </WrapperStyleComponent>
            </section>
        </>
    )   
}

export default memo(DetailPage);