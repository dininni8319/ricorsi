import { Link } from "react-router-dom";
import { funFormatDate } from "../../Utilities/index";

const SearchedDetails = ( { selectedItem, searched, cardId, handleSelectedItem, handleNavigate }:any) => {
  return (
       <ul
        className={`bg-white p-2 shadow-md ${
          selectedItem && cardId === parseInt(searched.id)
            ? "active-class"
            : ""
        }`}
        onMouseOver={() =>
          handleSelectedItem(parseInt(searched?.id))
        }
        onClick={() => handleNavigate('detail_cartoline',parseInt(searched.id))}
        key={cardId}
      >
        <li>
          <span className="font-semibold pr-1">Nome e Cognome:</span>
          {searched.nome_cognome_debitore}
        </li>
        <li>
          <span className="font-semibold pr-1">C.F/P.I:</span>
          {searched.cf_piva_debitore}
        </li>
        <li>
          <span className="font-semibold pr-1">Data Notifica:</span>
          {funFormatDate(searched.data_notifica)}
        </li>
        <Link to={`/detail_cartoline/${searched.id}`}>
          Dettaglio Cartolina
        </Link>
      </ul>
  );
}

export default SearchedDetails;