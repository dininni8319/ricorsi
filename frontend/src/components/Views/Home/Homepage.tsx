import { useState, useEffect } from "react";
import { baseURL } from "../../Utilities/index";
import Loader3 from '../../UI/Loaders/Loader3/index';
import { ObjFormType } from "../../interfaces/interfaces";
import Aside from '../../UI/Aside/index';
import Card from '../../UI/Card/index';
import { WrapperStyleComponent } from "./style";
import useApiRequest from '../../state/useApiRequest';
import {  Link } from "react-router-dom";

const Homepage = () => {
 
    const [ { status, response }, makeRequest ] = useApiRequest(
        `${baseURL}/api/cienneffe/ricorsi/`, {
            verb: 'get',
        }
    )
   
    useEffect(() => {
        const data =  makeRequest();
    },[])

    return (
        <div className="height-custom">
            {/* <>
                <Aside></Aside>
            </> */}
            <WrapperStyleComponent>
                <> 
                    { response ? response?.data?.ricorsi?.map((ricorso: ObjFormType, id: number) => {
                        return (
                            <Card 
                                taxunit={ricorso}
                                key={id}
                                path='ricorso/delete'
                            >
                                <>
                                    <h3 className="card-title mb-3">Tributo: {ricorso.tributo}</h3>

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
                                    </ul>

                                    <div className="card-actions justify-end">
                                        <p className='font-serif text-sm'>{ricorso.oggetto_ricorso}</p>
                                    </div>
                                    <div className='flex justify-between p-2'>
                                        <Link to={`/work_flow/${ricorso.id}`}>Aggiorna Ricorso</Link>
                                        <Link to={`/ricorsi_detail/${ricorso.id}`}>Dettaglio Ricorso</Link>
                                    </div>
                                </>
                            </Card>
                        )
                    }): <Loader3 />}
                </>
            </WrapperStyleComponent>

        </div>
    )
}

export default Homepage;
