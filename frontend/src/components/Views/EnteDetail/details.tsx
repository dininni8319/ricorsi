import { EnteType } from '../../interfaces/interfaces';

const Details = ({ ente }: {ente: EnteType}) => {
    return (
        <ul className="ul-detail-style">
            <li>
                Nominativo:<span>{ente.descrizione_comune}</span>
            </li>
            <li>
                Provincia:
                <span>{ente.provincia}</span>
            </li>
            <li>
                Regione:<span>{ente.regione}</span>
            </li>
            <li>
                Codice Catastale:<span>{ente.codice_catastale}</span>
            </li>
            <li>
                Indirizzo:<span>{ente.indirizzo}</span>
            </li>
            <li>
                Email:<span>{ente.email}</span>
            </li>
            <li>
                Telefono:<span>{ente.numero_telefono}</span>
            </li>
        </ul>
    );
};

export default Details;
