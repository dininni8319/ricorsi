import { Link } from "react-router-dom";
import { RicorsoProps } from "../../interfaces/interfaces";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router';
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent } from "../RicorsiDetail/style";
import { Card, DetailPage } from "../../UI/index";
import useApiRequest from '../../state/useApiRequest';
import { faseCurrent } from "../../Utilities/index";

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

  const handleDelete = (e:any) => {
    e.preventDefault();
    makeRequest()
    navigate('/')
  } 
  
  return (
    <DetailStyleComponent>
            <>
              <h1 className="mb-2 text-center">Fase: <span>{faseCurrent(fase?.fase)}</span></h1>
              {fase &&  <DetailPage 
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
                          Data presentazione: <span>{fase.data_presentazione}</span> 
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
                          Data deposito Sentenza: <span>{fase.data_deposito_sentenza}</span>
                      </li>
                      <li>
                          Data notifica Sentenza: <span>{fase.data_notifica_sentenza}</span>
                      </li>
                  </ul>
                </DetailPage>
              }
            </>
            <section className='links-detail-page mt-5'>
              {fase && <>
                <div className='md:flex md:justify-between md:items-end py-2'>
                    
                    <Link to={`/form_fase/${fase.id}`}>Aggiorna la Fase</Link>
                    <>
                      <button onClick={(event)=> handleDelete(event)} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
                    </>
                </div> 
              </>}
            </section> 
    </DetailStyleComponent>   
  )
}

export default FasiDetail;
