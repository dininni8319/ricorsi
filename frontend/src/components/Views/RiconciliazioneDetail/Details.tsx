import { funFormatDate } from '../../Utilities/index';
import { IRiconciliazione } from '../../interfaces/interfaces';

const Details = ({ riconciliazione }: { riconciliazione: IRiconciliazione }) => {
    return (
        <ul className="ul-detail-style">
            <li>
                Anno: <span>{riconciliazione.anno}</span>
            </li>
            <li>
                Mese:{' '}
                <span>{riconciliazione.mese}</span>
            </li>
            <li>
                Totale:{' '}
                <span>{riconciliazione.totale}</span>
            </li>
            <li>
                Oneri di riscossione: <span>{riconciliazione.oneri_riscossione}</span>
            </li>
            <li>
                Spese di notifica:{' '}
                <span>{riconciliazione.spese_notifica}</span>
            </li>
            <li>
                Diritti Vari: <span>{riconciliazione.diritti_vari}</span>
            </li>
        </ul>
    );
};

export default Details;
