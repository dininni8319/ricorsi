import { funFormatDate } from '../../Utilities/index';
import { IRiscossione } from '../../interfaces/interfaces';

const Details = ({ riscossione }: { riscossione: IRiscossione }) => {
    return (
        <ul className="ul-detail-style">
            <li>
                Entrata Tributo: <span>{riscossione.entrata_tributo}</span>
            </li>
            <li>
                Tipologia Documenti:{' '}
                <span>{riscossione.tipologia_documenti}</span>
            </li>
            <li>
                Tipologia Spedizioni:{' '}
                <span>{riscossione.tipologia_spedizioni}</span>
            </li>
            <li>
                Nr. Atti: <span>{riscossione.nr_atti}</span>
            </li>
            <li>
                Data Consegna al Service:{' '}
                <span>{funFormatDate(riscossione.data_consegna_service)}</span>
            </li>
            <li>
                Numero Atti Spediti: <span>{riscossione.nr_atti_spediti}</span>
            </li>
            <li>
                Data Conferma Anteprime:{' '}
                <span>
                    {funFormatDate(riscossione.data_conferma_anteprime)}
                </span>
            </li>
            <li>
                Cartoline di Ritorno Inserite:{' '}
                <span>{riscossione.cartoline_ritorno_inserite}</span>
            </li>
            <li>
                Notifiche Positive:{' '}
                <span>{riscossione.notifiche_positive}</span>
            </li>
            <li>
                Notifiche Negative:{' '}
                <span>{riscossione.notifiche_negative}</span>
            </li>
            <li>
                Numero di Atti da Rinotificare:{' '}
                <span>{riscossione.numero_atti_rinotificare}</span>
            </li>
            <li>
                Numero di Atti Annulati:{' '}
                <span>{riscossione.nr_atti_annullati}</span>
            </li>
            <li>
                Importo Atti Annullati:{' '}
                <span>{riscossione.importo_atti_annullati}</span>
            </li>
            <li>
                Atti Rettificati: <span>{riscossione.atti_rettificati}</span>
            </li>
            <li>
                Importo Atti Rettificati:{' '}
                <span>{riscossione.importo_atti_rettificati}</span>
            </li>
        </ul>
    );
};

export default Details;
