import {  Link } from "react-router-dom";
import { RicorsoProps } from "../../interfaces/interfaces";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router';
import { baseURL } from "../../Utilities/index";
import useApiRequest from '../../state/useApiRequest';
import { DetailStyleComponent  } from "./style";
import DetailPage from '../../UI/DetailPage';

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

//   console.log(response, 'testing the type of ricorso');

  let ricorso = {...response?.data?.ricorso}
  
  return (
      <section className="height-custom flex justify-center">
            <DetailStyleComponent>
                <h1 className="mb-3 text-center pr-2">Tributo:{ricorso?.tributo}</h1>

                 <DetailPage 
                   ricorso={ricorso}
                 />
                <section className='md:px-3'>
                    <div className='md:flex justify-between  border-bottom-style py-2'>
                        <Link to={`/work_flow/${ricorso.id}`}>Aggiorna Ricorso</Link>
                        <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
                    </div>
                    <div className="card-actions">
                         <p className='font-serif mt-3'>{ricorso.oggetto_ricorso}</p>
                    </div>
                </section>
            </DetailStyleComponent>
        </section>
      
  )
}

export default RicorsiDetail;
