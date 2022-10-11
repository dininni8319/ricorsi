import { Link } from "react-router-dom";
const Search = ({ searchedRicorsi, handleChange}: { searchedRicorsi: any, handleChange: any}) =>{
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" placeholder='Cerca un Ricorso' onChange={handleChange} name='query'/>
      {searchedRicorsi?.map((searched:any) => {
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
</div>
  )
}

export default Search;