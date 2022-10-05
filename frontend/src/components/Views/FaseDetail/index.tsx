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
                      <h1 className="mb-2 text-center pr-1">Fase:{fase?.fase}</h1>
                      {fase &&  <DetailPage 
                          slug={slug}
                        >
                          
                          <h2>hello</h2>
                        </DetailPage>
                      }
                    </>
                    <section className='links-detail-page'>
                      {fase && <>
                        <div className='md:flex md:justify-between md:items-end border-bottom-style py-2'>
                            
                            <Link to={`/form_fase/${fase.id}`}>Aggiorna la Fase</Link>
                            <div>
                              <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
                            </div>
                        </div> 
                      </>}
                    </section> 
                </section> 
            </DetailStyleComponent>   
  )
}

export default FasiDetail;
