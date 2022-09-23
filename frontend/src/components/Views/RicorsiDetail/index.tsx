import {  Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { baseURL } from "../../Utilities/index";
import useApiRequest from '../../state/useApiRequest';

const RicorsiDetail = () => {
  let { slug } = useParams();

  const [ { status, response }, makeRequest ] = useApiRequest(
    `${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
        verb: 'get',      
    }
  )

  useEffect(() => {
    makeRequest()
  },[])

  let ricorso = {...response?.data?.ricorso}
  return (
      <div className="height-custom">
           <div className="card card-style bg-base-100 shadow-xl m-2 ">
           
            <section className="card-body">
                <h3 className="card-title mb-3">Tributo: {ricorso.tributo}</h3>

                <ul className="border-custom">
                    <li>
                       <span className="font-semibold pr-1">Numero Ricorso:</span>{ricorso.numero_ricorso}
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
                </ul>

                <div className="card-actions justify-end">
                   <p className='font-serif text-sm'>{ricorso.oggetto_ricorso}</p>
                </div>
                <Link to={`/work_flow/${ricorso.id}`}>Aggiorna Ricorso</Link>
                <Link to={`/ricorsi_detail/${ricorso.id}`}>Dettaglio Ricorso</Link>
                {/* <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18'>Cancella</button> */}
            </section>
        </div>
      </div>
  )
}

export default RicorsiDetail;
