import { Link } from 'react-router-dom';
import { ServizioType } from "../../interfaces/interfaces";
import { funFormatDate } from '../../Utilities/index';

const CardDetails = ({ servizio }: {servizio: ServizioType}) => {
    return (
        <>
            <h3 className="card-title mb-2">
                Tipologia servizio: <span>{servizio.tipologia_servizi}</span>
            </h3>
            <ul className="border-custom ul-style-custom">
                <li>
                    Esito: <span>{servizio.tipologia_attivita}</span>
                </li>
                <li>
                    Esito definitivo: <span>{servizio.aggio}</span>
                </li>
                <li>
                    Sede: <span>{servizio.spese_postali}</span>
                </li>
                <li>
                    Spese: <span>{servizio.altri_diritti}</span>
                </li>
                <li>
                    Spese: <span>{servizio.cig}</span>
                </li>
                <li>
                    Spese: <span>{servizio.codice_catastale}</span>
                </li>
            </ul>
            <div className="flex justify-between py-1">
                <Link to={`/detail_servizio/${servizio.id}`}>Dettaglio servizio</Link>
                 
                <Link to={`/update_servizio/${servizio?.id}`}>
                    Aggiorna questo servizio
                </Link>
            </div>
        </>
    );
};

export default CardDetails;
