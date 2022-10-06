import { useState, useEffect } from "react";
import { baseURL } from "../../Utilities/index";
import Loader3 from '../../UI/Loaders/Loader3/index';
import { ObjFormType } from "../../interfaces/interfaces";
import Aside from '../../UI/Aside/index';
import Card from '../../UI/Card/index';
import { WrapperStyleComponent } from "./style";
import useApiRequest from '../../state/useApiRequest';
import {  Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";

const Homepage = () => {
 
    let { payload, setData }  = useFetch(`${baseURL}/api/cienneffe/ricorsi/`, {
        verb: 'get',      
      })

    let { ricorsi }: any = payload;
    console.log(ricorsi, 'testing the ricorsi');
    
    return (
        <div className="height-custom">
        
             <WrapperStyleComponent>
                <> 
                    {ricorsi?.map((ricorso: ObjFormType, id: number) => {
                        return (
                            <Card 
                                taxunit={ricorso}
                                key={id}
                                path='ricorso/delete'
                                current={ricorsi}
                                setCurrent={setData}
                            >
                                <>
                                    <h3 className="card-title mb-3">Tributo: <span>{ricorso.tributo}</span></h3>

                                    <ul className="border-custom">
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
                                        <Link to={`/ricorsi/${ricorso.id}`}>Aggiorna Ricorso</Link>
                                        <Link to={`/ricorsi_detail/${ricorso.id}`}>Dettaglio Ricorso</Link>
                                    </div>
                                </>
                            </Card>
                        )
                    })}
                </>
            </WrapperStyleComponent>

        </div>
    )
}

export default Homepage;
