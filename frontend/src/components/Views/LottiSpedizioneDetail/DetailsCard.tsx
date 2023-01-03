import { Link } from 'react-router-dom';

const DetailsCard = ({ riconcil }: any) => {
    return (
        <div>
            <h3 className="card-title mb-3">
                Anno: <span>{riconcil.anno}</span>
            </h3>

            <ul className="border-custom ul-style-custom">
                <li>
                    <span className="font-semibold pr-1">Mese:</span>
                    {riconcil.mese}
                </li>
                <li>
                    <span className="font-semibold pr-1">Totale:</span>
                    {riconcil.totale}
                </li>
                <li>
                    <span className="font-semibold pr-1">Oneri di riscossione:</span>
                    {riconcil.oneri_riscossione}
                </li>
                <li>
                    <span className="font-semibold pr-1">Spese di notifica</span>
                    {riconcil.spese_notifica}
                </li>
                <li>
                    <span className="font-semibold pr-1">Diritti vari:</span>
                    {riconcil.diritti_vari}
                </li>
            </ul>

            <div className="flex justify-between py-1">
                <Link to={`/work_flow/${riconcil.id}`}>
                    Aggiorna riconciliazione
                </Link>
                <Link to={`/detail_cartoline/${riconcil.id}`}>
                    Dettaglio riconciliazione
                </Link>
            </div>
        </div>
    );
};

export default DetailsCard;
