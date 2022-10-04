import { RicorsoProps, FasiListProps, Fasi } from "../../interfaces/interfaces";
import { Link } from 'react-router-dom';
import { useLayoutEffect, useState } from "react";
import Modal from "../Modal";
import { baseURL } from '../../Utilities/index'
import useFetch from '../../../Hooks/useFetch';
import Card from "../Card";

const DetailPage = ( { ricorso, slug }: RicorsoProps) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const { data }:{ data: FasiListProps}  = useFetch(`${baseURL}/api/cienneffe/current_fasis/${slug}`, {
        verb: 'get',      
    });
    
    let fasi = data.fasi
    console.log(fasi);

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
                
            </ul>
            <section className='py-2'>
                {/* <button className='primaryBtn' onClick={() => setIsOpen(true)}>
                    Avvia una fase
                </button> */}
                {
                    fasi?.map((fase:Fasi, id: number) => {
                        return (
                            <Card
                               taxunit={fase}
                               key={id}
                            >
                                <>
                                <li>{fase.fase}</li>
                                </>

                            </Card>
                        )
                    }) 
                } 
                <Link to={`/fasi/${ricorso.id}`} className='primaryBtn'>Avvia una Fase</Link>
                {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
               
            </section>
        </>
    )   
}

export default DetailPage;