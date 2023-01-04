import { Link } from 'react-router-dom';
import { IRiscossione } from "../../interfaces/interfaces";
import { funFormatDate } from '../../Utilities/index';

const CardDetails = ({ riscossione }: { riscossione: IRiscossione }) => {
    return (
      <>
        <h3 className="card-title mb-3">
            Descrizione spedizione:{' '}
            <span>
                {
                    riscossione.descrizione_spedizione
                }
            </span>
        </h3>
        <ul className="border-custom ul-style-custom">
            <li>
                <span className="font-semibold pr-1">
                    Entrata Tributo:
                </span>
                {
                    riscossione.entrata_tributo
                }
            </li>
            <li>
                <span className="font-semibold pr-1">
                    Tipologia
                    Spedizione:
                </span>
                {
                    riscossione.tipologia_spedizioni
                }
            </li>
            <li>
                <span className="font-semibold pr-1">
                    Tipologia Documenti:
                </span>
                {
                    riscossione.tipologia_documenti
                }
            </li>
            <li>
                <span className="font-semibold pr-1">
                    Numeri Atti:
                </span>
                {riscossione.nr_atti}
            </li>
            <li>
                <span className="font-semibold pr-1">
                    Data di Consegna al
                    Service:
                </span>
                {funFormatDate(
                    riscossione.data_consegna_service
                )}
            </li>
            <li>
                <p className="font-serif text-sm">
                    <span className="font-semibold pr-1">
                        Numberi Atti
                        Spediti:
                    </span>
                    {
                        riscossione.nr_atti_spediti
                    }
                </p>
            </li>
        </ul>

        <div className="flex justify-between py-1">
            <Link
                to={`/update_riscossione/${riscossione.id}`}
            >
                Aggiorna il Lotto di
                Spedizione
            </Link>
            <Link
                to={`/detail_riscossione/${riscossione.id}`}
            >
                Dettaglio Lotto di
                Spedizione
            </Link>
        </div>
      </>
    );
};

export default CardDetails;