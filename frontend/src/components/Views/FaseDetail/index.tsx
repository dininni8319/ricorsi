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

const FasiDetail = () => {
 
  let { slug } = useParams();
  let navigate = useNavigate()

  let { payload, setData } = useFetch(`${baseURL}/api/cienneffe/detail_fase/${slug}`, {
    verb: 'get',      
  })
  
  const [ { status, response }, makeRequest ] = useApiRequest(
    `${baseURL}/api/cienneffe/fase/delete/${slug}`, {
        verb: 'delete',
    }
  )

  let { fase }:any = payload;
  
  // useEffect(() => {
  //   fetch(`${baseURL}/api/cienneffe/detail_ricorso/${fase?.ricorsi_id}`)
  //   .then(response => response.json())
  //   .then(data => setRicorso({...data.ricorso}))
    
  // },[])

  const handleDelete = (e:any) => {
    e.preventDefault();
    makeRequest()
    navigate('/')
  } 
  
  return (
    <DetailStyleComponent>
            <>
              <h1 className="mb-2 text-center">Fase: <span>{faseCurrent(fase?.fase)}</span></h1>
              {fase ? <DetailPage 
                  slug={slug}
                >
                  <ul className="ul-detail-style">
                      <li>
                          Presentato da: <span>{fase.presentato}</span>
                      </li>
                      <li>
                          Contro deduzioni Taxunit: <span>{fase.contro_deduzioni_tax_unit}</span>
                      </li>
                      <li>
                          Contro deduzioni uff. Legale: <span>{fase.contro_deduzioni_uff_legale}</span>
                      </li>
                      <li>
                          Data presentazione: <span>{funFormatDate(fase.data_presentazione)}</span> 
                      </li>
                      <li>
                          Sede: <span>{fase.sede}</span>
                      </li>
                      <li>
                          Esito: <span>{fase.esito}</span>
                      </li>
                      <li>
                          Esito definitivo: <span>{fase.esito_definitivo}</span>
                      </li>

                      <li>
                          Motivazione:  <span>{fase.motivazione}</span>
                      </li>
                      <li>
                          Spese: <span>{fase.spese}</span>
                      </li>
                      <li>
                          Data deposito Sentenza: <span>{funFormatDate(fase.data_deposito_sentenza)}</span>
                      </li>
                      <li>
                          Data notifica Sentenza: <span>{funFormatDate(fase.data_notifica_sentenza)}</span>
                      </li>
                  </ul>
                </DetailPage> : <Loader3 />
              }
            </>
            {/* <Card 
                  taxunit={ricorso}
                  path='ricorso/delete'
            >
                  <>
                      <h3 className="card-title mb-3">Tributo: <span>{ricorso.tributo}</span></h3>

                      <ul className="border-custom ul-style-custom">
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
                          <li>
                              <p className='font-serif text-sm'><span className="font-semibold pr-1">Descrizione:</span>{ricorso.oggetto_ricorso}</p>
                          </li>
                      </ul>

                      <div className='flex justify-between py-1'>
                          <Link to={`/ricorsi/${fase?.ricorsi_id}`}>Aggiorna Ricorso</Link>
                          <Link to={`/ricorsi_detail/${fase?.ricorsi_id}`}>Dettaglio Ricorso</Link>
                      </div>
                  </>
            </Card> */}
            <section className='links-detail-page mt-5'>
              {fase && <div className='md:flex md:justify-between md:items-end py-2'>
                    
                    <Link to={`/form_fase/${fase.id}`}>Aggiorna la Fase</Link>
                    <>
                      <button onClick={(event)=> handleDelete(event)} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
                    </>
                </div> 
              }
            </section> 
    </DetailStyleComponent>   
  )
}

export default FasiDetail;
