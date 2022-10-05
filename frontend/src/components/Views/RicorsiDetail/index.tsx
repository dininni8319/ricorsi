import {  Link } from "react-router-dom";
import { RicorsoProps, Fasi } from "../../interfaces/interfaces";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router';
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent  } from "./style";
import { WrapperStyleComponent } from "../Home/style";
import DetailPage from '../../UI/DetailPage';
import Card from '../../UI/Card/index';
import useApiRequest from '../../state/useApiRequest';
import axios from "axios";
import { faseCurrent } from "../../Utilities/index"; 

const RicorsiDetail = () => {
  
  let { slug } = useParams();
  let navigate = useNavigate()
  const [currentFasis, setCurrentFasis ] = useState([])
  
  let { payload } = useFetch(`${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
    verb: 'get',      
  })

  useEffect(() => {

    axios.get(`${baseURL}/api/cienneffe/current_fasis/${slug}`)
      .then(response => {
        
        setCurrentFasis(response.data.fasi);
      })
      .catch((error: unknown) =>{
        alert(error)
      })
  },[])
  

  const [ { status, response }, makeRequest ] = useApiRequest(
    `${baseURL}/api/cienneffe/ricorso/delete/${slug}`, {
        verb: 'delete',
    }
  )

  let { ricorso }:any = payload;

  const handleDelete = (e:any, id?: number) => {
    e.preventDefault();
    makeRequest()
    navigate('/')
  } 

  return (
      <DetailStyleComponent>
              
          <section className="flex flex-col items-center">
                <h1 className="mb-2 text-center pr-1">Tributo:{ricorso?.tributo}</h1>
                  {ricorso &&  <DetailPage 
                    slug={slug}
                  >
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
                              {currentFasis?.map((fase:Fasi, id: number) => {
                                  return (
                                    <Card
                                        taxunit={fase}
                                        key={id}
                                        path='fase/delete'
                                        setCurrentFasis={setCurrentFasis}
                                        currentFasis={currentFasis}
                                    >
                                      <>
                                          <h3 className="card-title mb-2">Fase corrente: <span>{faseCurrent(fase.fase)}</span></h3>
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
                                              <Link to={`/fase_detail/${fase.id}`}>Dettaglio Fase</Link>
                                          </div>
                                      </>
                                    </Card>
                                  )
                              })} 
                          </WrapperStyleComponent>
                      </section>
                      </>
                    </DetailPage>}
                
                  <section className='links-detail-page'>
                    {ricorso && <>
                        <div className='md:flex md:justify-between md:items-end border-bottom-style py-2'>
                            <Link to={`/form_fase/${ricorso?.id}`} className='primaryBtn'>Avvia una Fase</Link>
                            <Link to={`/ricorsi/${ricorso?.id}`}>Aggiorna Ricorso</Link>
                            <div>
                              <button onClick={(e) => handleDelete(e)} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
                            </div>
                        </div>
                      
                    </>}
                  </section> 
          </section>     
      </DetailStyleComponent>   
  )
}

export default RicorsiDetail;
