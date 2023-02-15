import { Link } from 'react-router-dom';
import { EnteType } from '../../interfaces/interfaces';

const CardDetail = ({ ente, id }: { ente: EnteType; id: number }) => {
    return (
        <section key={id}>
            <h3 className="card-title mb-3">
                Descrizione Comune: <span>{ente.descrizione_comune}</span>
            </h3>
            <ul className="border-custom ul-style-custom">
            <li>
                    <span className="font-bold">Regione:</span>
                    <span>{ente.regione}</span>
                </li>
                <li>
                    <span className="font-bold">Provicia:</span>
                    <span>{ente.provincia}</span>
                </li>
                <li>
                    <span className="font-bold">Email:</span>
                    <span>{ente.email}</span>
                </li>
                <li>
                    <span className="font-bold">Indirizzo:</span>
                    <span>{ente.indirizzo}</span>
                </li>
                <li>
                    <span>Numero di telefono:</span>
                    <span>{ente.numero_telefono}</span>
                </li>
                <li>
                    <span className="font-bold">Codice catastale:</span>
                    <span>{ente.codice_catastale}</span>
                </li>
            </ul>

            <div className="flex justify-between py-1">
                <Link to={`/update_ente/${ente.id}`}>
                    Aggiorna l'ente
                </Link>
                <Link to={`/detail_ente/${ente.id}`}>
                    Dettaglio dell'ente
                </Link>
            </div>
        </section>
    );
};

export default CardDetail;
