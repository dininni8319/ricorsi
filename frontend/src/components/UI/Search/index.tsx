import { Link } from "react-router-dom";
import { SearchStyleComponent } from "./style";

const Search = ({ title, searchedRicorsi, handleChange }: {title: string, searchedRicorsi: {[key: string]: string}[], handleChange: any}) => {

  return (
    <SearchStyleComponent>
      <>
        <input type="text" placeholder={`Cerca un ${title}`} onChange={handleChange} name='query'/>
      </>
  
      {searchedRicorsi?.map((searched: {[key: string]: string}) => {
        return (
            <ul className='bg-white mt-2 p-2 shadow-md border-slate-400'>
                <li>
                    <span className="font-semibold pr-1">Numero Ricorso:</span>{searched.numero_ricorso}
                </li>
                <li>
                    <span className="font-semibold pr-1">Ente:</span>{searched.ente} 
                </li>
                <li>
                    <span className="font-semibold pr-1">Anno imposta:</span>{searched.anno_imposta}
                </li>
                <Link to={`/ricorsi_detail/${searched.id}`}>Dettaglio Ricorso</Link>
            </ul>
        )
      })}
    </SearchStyleComponent>
  )
}

export default Search;