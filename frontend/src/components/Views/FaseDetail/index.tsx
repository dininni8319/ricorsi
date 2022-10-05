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

const FasiDetail = () => {

  let { slug } = useParams();
  let navigate = useNavigate()

  let { payload } = useFetch(`${baseURL}/api/cienneffe/detail_fase/${slug}`, {
    verb: 'get',      
  })

  const [ { status, response }, makeRequest ] = useApiRequest(
    `${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
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
              
                {/* <section className="flex flex-col items-center">
                    <>
                      <h1 className="mb-2 text-center pr-1">Tributo:{ricorso?.tributo}</h1>
                      {ricorso &&  <DetailPage 
                        ricorso={ricorso}
                        slug={slug}
                      />}
                    </>
                    <section className='links-detail-page'>
                    {ricorso && <>
                        <div className='md:flex md:justify-between md:items-end border-bottom-style py-2'>
                            <Link to={`/fasi/${ricorso?.id}`} className='primaryBtn'>Avvia una Fase</Link>
                            <Link to={`/work_flow/${ricorso?.id}`}>Aggiorna Ricorso</Link>
                            <div>
                              <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
                            </div>
                        </div>
                      
                    </>}
                </section> 
                </section> */}
              
                {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
               
            </DetailStyleComponent>   
  )
}

export default FasiDetail;
