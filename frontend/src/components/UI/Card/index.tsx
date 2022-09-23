import { ObjFormType } from "../../interfaces/interfaces";
import { CardHeaderStyle } from "./style";
import { baseURL } from "../../Utilities/index";
import useApiRequest  from "../../state/useApiRequest";
import { Link } from 'react-router-dom';
const Card = ({ricorsi, id }: {ricorsi:ObjFormType, id: number}) => {
    
    const [ { status, response }, makeRequest ] = useApiRequest(
        `${baseURL}/api/cienneffe/ricorso/delete/${ricorsi.id}`, {
            verb: 'delete',
        }
    )
     console.log(response, 'response');
     
    const handleDelete = (e:any) => {
       e.preventDefault();
        
       const del = makeRequest();
       return del;
    } 

    return (
        <div className="card card-style bg-base-100 shadow-xl m-2 " key={id}>
            <CardHeaderStyle></CardHeaderStyle>
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
                <Link to={`/work_flow/${ricorsi.id}`}>Aggiorna Ricorso</Link>
                <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18'>Cancella</button>
            </section>
        </div>
    );
}

export default Card;