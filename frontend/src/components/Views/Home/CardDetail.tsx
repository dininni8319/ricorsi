import { Link } from 'react-router-dom';
import { ObjFormType } from "../../interfaces/interfaces";

const CardDetail = ( { ricorso, id }:{ ricorso:ObjFormType, id: number }) => {
  return (
    <section key={id}>
        <h3 className="card-title mb-3">
          Tributo: <span>{ricorso.tributo}</span>
        </h3>
        <ul className="border-custom ul-style-custom">
          <li>
            <span className="font-bold">
              Numero Ricorso:
            </span>
            <span>{ricorso.numero_ricorso}</span>
          </li>
          <li>
            <span className="font-bold">Ente:</span>
            <span>{ricorso.ente}</span>
          </li>
          <li>
            <span className="font-bold">
              Anno imposta:
            </span>
            <span>{ricorso.anno_imposta}</span>
          </li>
          <li>
            <span>
              Importo Atto:
            </span>
            <span>{ricorso.importo_atto}</span>
          </li>
          <li>
            <span className="font-bold">Esito:</span>
            <span>{ricorso.esito}</span>
          </li>
          <li>
            <p>
              <span className="pr-2">
                Descrizione:
              </span>
              <span>{ricorso.oggetto_ricorso}</span>
            </p>
          </li>
        </ul>

        <div className="flex justify-between py-1">
          <Link to={`/update_ricorso/${ricorso.id}`}>
            Aggiorna Ricorso
          </Link>
          <Link to={`/ricorsi_detail/${ricorso.id}`}>
            Dettaglio Ricorso
          </Link>
        </div>
    </section>
  );
}

export default CardDetail; 