import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL } from "../../Utilities/index";
import { ObjFormType } from "../../interfaces/interfaces";
 import { Card } from "../../UI/index";
import { WrapperStyleComponent } from "./style";
import useFetch from "../../../Hooks/useFetch";
import useApiRequest from '../../state/useApiRequest';

const Homepage = () => {
    const [ ricorsi, setRicorsi ] = useState<{[key: string]: string}[]>([])
 
    useEffect(() => {
        fetch(`${baseURL}/api/cienneffe/ricorsi`)
          .then(response => response.json())
          .then(data => setRicorsi(prev => [...data.ricorsi]))
          .catch((error: unknown) =>{
             console.log(error);
          })
      },[ricorsi])
    
    return (
        <div className="height-custom">
             <WrapperStyleComponent>
                <> 
                    {ricorsi?.map((ricorso, id: number) => {
                        return (
                            <>
                                <Card 
                                    taxunit={ricorso}
                                    key={id}
                                    path='ricorso/delete'
                                    current={ricorsi}
                                    setCurrent={setRicorsi}
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
                                            <Link to={`/ricorsi/${ricorso.id}`}>Aggiorna Ricorso</Link>
                                            <Link to={`/ricorsi_detail/${ricorso.id}`}>Dettaglio Ricorso</Link>
                                        </div>
                                    </>
                                </Card>
                            </>
                        )
                    })}
                </>
            </WrapperStyleComponent>
        </div>
    )
}

export default Homepage;
