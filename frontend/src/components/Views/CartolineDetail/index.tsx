import { Link } from "react-router-dom";
import { RicorsoProps } from "../../interfaces/interfaces";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router';
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent } from "../RicorsiDetail/style";
import { Card, DetailPage, Loader3 } from "../../UI/index";
import useApiRequest from '../../state/useApiRequest';
import { faseCurrent, funFormatDate } from "../../Utilities/index";

const CartolineDetail = () => {
  let { slug } = useParams();
  let navigate = useNavigate()

  let { payload, setData } = useFetch(`${baseURL}/api/cienneffe/detail_cartoline/${slug}`, {
    verb: 'get',      
  })
  
  const [ { status, response }, makeRequest ] = useApiRequest(
    `${baseURL}/api/cienneffe/cartolina/delete/${slug}`, {
        verb: 'delete',
    }
  )

  let { cartolina }:any = payload;
  
  const handleDelete = (e:any) => {
    e.preventDefault();
    makeRequest()
    navigate('/')
  } 
  
  return (
    <DetailStyleComponent>
            <>
              <h1 className="mb-2 text-center">Descrizione della Cartolina: <span>{cartolina?.descrizione_mandante}</span></h1>
              {cartolina && <DetailPage 
                  slug={slug}
                >
                  <ul className="ul-detail-style">
                      <li>
                          Presentato da: <span>{cartolina.codice_mandate}</span>
                      </li>
                      <li>
                          Contro deduzioni Taxunit: <span>{cartolina.nome_cognome_debitore}</span>
                      </li>
                      <li>
                          Contro deduzioni uff. Legale: <span>{cartolina.cf_piva_debitore}</span>
                      </li>
                      <li>
                          Ndg: <span>{cartolina.ndg}</span> 
                      </li>
                      <li>
                          Sede: <span>{funFormatDate(cartolina.data_spedizione)}</span>
                      </li>
                      <li>
                          Esito: <span>{cartolina.numero_raccomandata}</span>
                      </li>
                      <li>
                          Esito definitivo: <span>{funFormatDate(cartolina.data_notifica)}</span>
                      </li>

                      <li>
                          Motivazione:  <span>{cartolina.esito_notifica}</span>
                      </li>
                      <li>
                          Spese: <span>{cartolina.chiave_pratica}</span>
                      </li>
                      <li>
                          Data deposito Sentenza: <span>{cartolina.fase}</span>
                      </li>
                      {/* <li>
                          Data notifica Sentenza: <span>{cartolina.data_notifica_sentenza}</span>
                      </li> */}
                  </ul>
                </DetailPage> 
              }
            </>
            <section className='links-detail-page mt-5'>
               {cartolina && <div className='md:flex md:justify-between md:items-end py-2'>
                    
                    <Link to={`/create_cartolina/${slug}`}>Aggiorna la Cartolina</Link>
                    <>
                      <button onClick={(event)=> handleDelete(event)} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
                    </>
                </div>  
              } 
            </section> 
    </DetailStyleComponent>   
  )
}

export default CartolineDetail;
