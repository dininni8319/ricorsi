import { Link } from "react-router-dom";
import { funFormatDate } from "../../Utilities/index";

const DetailsCard = ( { cartolina }:any) => {
  return (
    <>
    <h3 className="card-title mb-3">
      Mandante: <span>{cartolina.descrizione_mandante}</span>
    </h3>

    <ul className="border-custom ul-style-custom">
      <li>
        <span className="font-semibold pr-1">
          Nome e Cognome:
        </span>
        {cartolina.nome_cognome_debitore}
      </li>
      <li>
        <span className="font-semibold pr-1">C.F/P.I:</span>
        {cartolina.cf_piva_debitore}
      </li>
      <li>
        <span className="font-semibold pr-1">
          Data Notifica:
        </span>
        {funFormatDate(cartolina.data_notifica)}
      </li>
      <li>
        <span className="font-semibold pr-1">NDG:</span>
        {cartolina.ndg}
      </li>
      <li>
        <span className="font-semibold pr-1">Fase:</span>
        {cartolina.fase}
      </li>
      <li>
        <p className="font-serif text-sm">
          <span className="font-semibold pr-1">
            Chiave Pratica:
          </span>
          {cartolina.chiave_pratica}
        </p>
      </li>
    </ul>

    <div className="flex justify-between py-1">
      <Link to={`/work_flow/${cartolina.id}`}>
        Aggiorna cartolina
      </Link>
      <Link to={`/detail_cartoline/${cartolina.id}`}>
        Dettaglio cartolina
      </Link>
    </div>
  </>
  );
}

export default DetailsCard;