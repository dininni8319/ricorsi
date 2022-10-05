import { ObjFormType, Fasi } from "../../interfaces/interfaces";
import { CardStyleComponent, CardHeaderStyle } from "./style";
import { baseURL } from "../../Utilities/index";
import useApiRequest  from "../../state/useApiRequest";
import { Link } from 'react-router-dom';
import { memo } from 'react';
const Card = ({taxunit, path, children }: {taxunit: ObjFormType | Fasi, path: string, children?: JSX.Element}) => {

    const [ { status, response }, makeRequest ] = useApiRequest(
        `${baseURL}/api/cienneffe/${path}/${taxunit.id}`, {
            verb: 'delete',
        }
        )

        console.log('====================================');
        console.log(status);
        console.log('====================================');
     
    const handleDelete = (e:any) => {
       e.preventDefault();
       
       const del = makeRequest();
    //    if () {
           
    //    }
       return del;
    } 

    return (
        <CardStyleComponent className="card card-style bg-base-100 shadow-xl m-2">
            <CardHeaderStyle></CardHeaderStyle>
            <section className="card-body">
              {children}
            </section>
            <div className='btn-delete'>
                <button onClick={handleDelete} className='bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold'>Cancella</button>
            </div>
                               
        </CardStyleComponent>
    );
}

export default memo(Card);