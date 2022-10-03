import {  Link } from "react-router-dom";
import { RicorsoProps } from "../../interfaces/interfaces";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router';
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent  } from "./style";
import DetailPage from '../../UI/DetailPage';
import useApiRequest from '../../state/useApiRequest';

const RicorsiDetail = () => {
  let { slug } = useParams();
  let navigate = useNavigate()

  const { data } = useFetch(`${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
    verb: 'get',      
  })

  const [ { status, response }, makeRequest ] = useApiRequest(
    `${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
        verb: 'delete',
    }
  )

  let { ricorso }: any = data 

  const handleDelete = (e:any) => {
    e.preventDefault();
    makeRequest()
    navigate('/')
  } 
  
  return (
      <section className="height-custom flex justify-center">
            <DetailStyleComponent>
                <h1 className="mb-3 text-center pr-2">Tributo:{ricorso?.tributo}</h1>

              {ricorso &&  <DetailPage 
                   ricorso={ricorso}
                   slug={slug}
                 />}
              {ricorso &&  <section className='md:px-3'>
                    <div className='md:flex justify-between  border-bottom-style py-3'>
                        <Link to={`/work_flow/${ricorso.id}`}>Aggiorna Ricorso</Link>
                        <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
                    </div>
                    <div className="card-actions">
                         <p className='font-serif mt-3'>{ricorso.oggetto_ricorso}</p>
                    </div>
                </section>}
            </DetailStyleComponent>
        </section>
      
  )
}

export default RicorsiDetail;
