import {  Link } from "react-router-dom";
import { RicorsoProps, FasiListProps, Fasi } from "../../interfaces/interfaces";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router';
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { WrapperStyleComponent } from "../Home/style";
import { DetailStyleComponent  } from "./style";
import DetailPage from '../../UI/DetailPage';
import Card from '../../UI/Card/index';
import useApiRequest from '../../state/useApiRequest';

const RicorsiDetail = () => {

  let { slug } = useParams();
  let navigate = useNavigate()

  const currentData = useFetch(`${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
    verb: 'get',      
  })

  const [ { status, response }, makeRequest ] = useApiRequest(
    `${baseURL}/api/cienneffe/detail_ricorso/${slug}`, {
        verb: 'delete',
    }
  )

  const { data }:{ data: FasiListProps}  = useFetch(`${baseURL}/api/cienneffe/current_fasis/${slug}`, {
    verb: 'get',      
});

  let { ricorso }: any = currentData.data 
  let fasi = data.fasi

  const handleDelete = (e:any) => {
    e.preventDefault();
    makeRequest()
    navigate('/')
  } 

  return (
      <section className="height-custom flex flex-col justify-center items-center">
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
               
                {/* <Link to={`/fasi/${ricorso.id}`} className='primaryBtn'>Avvia una Fase</Link> */}
                {/* {isOpen && <Modal setIsOpen={setIsOpen} />} */}
            </DetailStyleComponent>
            <WrapperStyleComponent>
              {
                fasi?.map((fase:Fasi, id: number) => {
                    return (
                        <Card
                            taxunit={fase}
                            key={id}
                        >
                          <>
                            <h3 className="card-title mb-3">Fase corrente: {fase.fase}</h3>
                            <ul className="border-custom">
                              <li>Esito: {fase.esito}</li>
                              <li>Esito definitivo: {fase.esito_definitivo}</li>
                              <li>Sede: {fase.sede}</li>
                              <li>Spese: {fase.spese}</li>
                              <li>Data presentazione:{fase.data_presentazione}</li>
                              <li>Data convocazione: {fase.data_convocazione}</li>
                          </ul>
                          </>
                        </Card>
                    )
                }) 
              } 
            </WrapperStyleComponent>
        </section>
      
  )
}

export default RicorsiDetail;
