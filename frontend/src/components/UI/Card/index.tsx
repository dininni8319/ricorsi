import { ObjFormType } from "../../interfaces/interfaces";
import { CardHeaderStyle } from "./style";
import { baseURL } from "../../Utilities/index";
import { useEffect, useReducer } from "react";
import useApiRequest  from "../../state/useApiRequest";

const Card = ({ricorsi, id }: {ricorsi:ObjFormType, id: number}) => {
    
    const [ { status, response }, makeRequest ] = useApiRequest(
        `${baseURL}/api/cienneffe/ricorso/delete/${ricorsi.id}`, {
            verb: 'delete',
        }
    )
    console.log(response, 'deleting the ricorsi');
    
    const handleDelete = (e:any) => {
        e.preventDefault();
        // fetch(`${baseURL}/api/cienneffe/ricorso/delete/${ricorsi.id}`,{
        //     method: "DELETE",
        // })
        //     .then(response => console.log(response))
       const del = makeRequest();
       return del;
    } 

    return (
        <div className="card card-style bg-base-100 shadow-xl m-2" key={id}>
            <CardHeaderStyle></CardHeaderStyle>
         {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
            <section className="card-body">
                <h3 className="card-title mb-3">Tributo: {ricorsi.tributo}</h3>

                <ul className="border-custom">
                    <li>
                       <span className="font-semibold pr-1">Numero Ricorso:</span>{ricorsi.numero_ricorso}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Ente:</span>{ricorsi.ente} 
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Anno imposta:</span>{ricorsi.anno_imposta}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Importo Atto:</span>{ricorsi.importo_atto}
                    </li>
                    <li>
                        <span className="font-semibold pr-1">Esito:</span>{ricorsi.esito}
                    </li>
                </ul>

                <div className="card-actions justify-end">
                   <p className='font-serif text-sm'>{ricorsi.oggetto_ricorso}</p>
                </div>
                <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18'>Cancella</button>
            </section>
        </div>
    );
}

export default Card;