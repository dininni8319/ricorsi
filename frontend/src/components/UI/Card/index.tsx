import { ObjFormType, Fasi } from "../../interfaces/interfaces";
import { CardStyleComponent, CardHeaderStyle } from "./style";
import { baseURL } from "../../Utilities/index";
import useApiRequest  from "../../state/useApiRequest";
import { Link } from 'react-router-dom';

const Card = ({taxunit, children }: {taxunit: ObjFormType | Fasi, children?: JSX.Element}) => {

    const [ { status, response }, makeRequest ] = useApiRequest(
        `${baseURL}/api/cienneffe/ricorso/delete/${taxunit.id}`, {
            verb: 'delete',
        }
    )
     
    const handleDelete = (e:any) => {
       e.preventDefault();
        
       const del = makeRequest();
       return del;
    } 

    return (
        <CardStyleComponent className="card card-style bg-base-100 shadow-xl m-2">
            <CardHeaderStyle></CardHeaderStyle>
            <section className="card-body">
              {children}
            </section>
            <div className='flex justify-between'>
                <Link to={`/work_flow/${taxunit.id}`}>Aggiorna Ricorso</Link>
                <Link to={`/ricorsi_detail/${taxunit.id}`}>Dettaglio Ricorso</Link>
            </div>
                               
            <div className='btn-delete'>
                <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
            </div>
        </CardStyleComponent>
    );
}

export default Card;