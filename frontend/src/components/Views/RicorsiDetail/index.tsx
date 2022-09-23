import {  Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router';
import { baseURL } from "../../Utilities/index";
import useApiRequest from '../../state/useApiRequest';
import { DetailStyleComponent  } from "./style";

const RicorsiDetail = () => {
  let { slug } = useParams();
  let navigate = useNavigate()

  const [ { status, response }, makeRequest ] = useApiRequest(
    `${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
        verb: 'get',      
    }
  )

  const [ { status2, response2 }, makeRequest2 ] = useApiRequest(
    `${baseURL}/api/cienneffe/ricorso/delete/${slug}`, {
        verb: 'delete',
    }
  )

  const handleDelete = (e:any) => {
    e.preventDefault();
    makeRequest2();
    navigate('/');

  } 

  useEffect(() => {
    makeRequest(); 
  },[])

  let ricorso = {...response?.data?.ricorso}
  return (
      <section className="height-custom flex justify-center">
            <DetailStyleComponent>
                <h1 className="mb-3">Tributo: {ricorso.tributo}</h1>

                <ul className="border-custom">
                    <li>
                       <span className="font-semibold pr-1">Numero Ricorso:</span>{ricorso.numero_ricorso}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Tributo:</span>{ricorso.tributo} 
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Ente:</span>{ricorso.ente} 
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Anno imposta:</span>{ricorso.anno_imposta}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Importo Atto:</span>{ricorso.importo_atto}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Esito:</span>{ricorso.esito}
                    </li>

                    <li>
                        <span className="font-semibold pr-1">Numero di protocollo interno:</span>{ricorso.numero_protocollo_interno}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Indirizzo:</span>{ricorso.indirizzo}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Email:</span>{ricorso.mail}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Telefono:</span>{ricorso.telefono}
                    </li>

                    <li>
                        <span className="font-semibold pr-1">Cod. Fiscale/P.Iva:</span>{ricorso.cf_piva}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Cod. Fiscale/P.Iva:</span>{ricorso.tipologia_atto}
                    </li>
                </ul>

                <div className="card-actions justify-end">
                   <p className='font-serif text-sm'>{ricorso.oggetto_ricorso}</p>
                </div>
                <div className='md:flex justify-around'>

                   <Link to={`/work_flow/${ricorso.id}`}>Aggiorna Ricorso</Link>
                   <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18'>Cancella</button>
                </div>
            </DetailStyleComponent>
        </section>
      
  )
}

export default RicorsiDetail;
