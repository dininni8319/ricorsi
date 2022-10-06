import {  Link } from "react-router-dom";
import { RicorsoProps } from "../../interfaces/interfaces";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router';
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent  } from "../RicorsiDetail/style";
import DetailPage from '../../UI/DetailPage';
import Card from '../../UI/Card/index';
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
        <section className="flex flex-col items-center">
            <>
              <h2 className="mb-2 text-center pr-1">Fase: {faseCurrent(fase?.fase)}</h2>
              {fase &&  <DetailPage 
                  slug={slug}
                >
                  <ul className="ul-detail-style">
                      <li>
                          <strong>Presentato da:</strong><span>{fase.presentato}</span>
                      </li>
                      <li>
                          <strong>Contro deduzioni Taxunit:</strong><span>{fase.contro_deduzioni_tax_unit}</span>
                      </li>
                      <li>
                          <strong>Contro deduzioni uff. Legale:</strong><span>{fase.contro_deduzioni_uff_legale}</span>
                      </li>
                      <li>
                          <strong>Data presentazione:</strong><span>{fase.data_presentazione}</span> 
                      </li>
                      <li>
                          <strong>Sede:</strong><span>{fase.sede}</span>
                      </li>
                      <li>
                          <strong>Esito:</strong><span>{fase.esito}</span>
                      </li>
                      <li>
                          <strong>Esito definitivo:</strong><span>{fase.esito_definitivo}</span>
                      </li>

                      <li>
                          <strong>Motivazione: </strong><span>{fase.motivazione}</span>
                      </li>
                      <li>
                          <strong>Spese:</strong><span>{fase.spese}</span>
                      </li>
                      <li>
                          <strong>Data deposito Sentenza:</strong><span>{fase.data_deposito_sentenza}</span>
                      </li>
                      <li>
                          <strong>Data notifica Sentenza:</strong><span>{fase.data_notifica_sentenza}</span>
                      </li>
                  </ul>
                </DetailPage>
              }
            </>
            <section className='links-detail-page'>
              {fase && <>
                <div className='md:flex md:justify-between md:items-end py-2'>
                    
                    <Link to={`/form_fase/${fase.id}`}>Aggiorna la Fase</Link>
                    <>
                      <button onClick={(event)=> handleDelete(event)} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
                    </>
                </div> 
              </>}
            </section> 
        </section> 
    </DetailStyleComponent>   
  )
}

export default FasiDetail;
