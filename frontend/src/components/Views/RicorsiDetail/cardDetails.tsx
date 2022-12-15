import { Link } from 'react-router-dom';
import { faseCurrent, funFormatDate } from '../../Utilities/index';

const CardDetails = ({ fase, currentId }: any) => {
    return (
        <>
            <h3 className="card-title mb-2">
                Fase corrente: <span>{faseCurrent(fase.fase)}</span>
            </h3>
            <ul className="border-custom ul-style-custom">
                <li>
                    Esito: <span>{fase.esito}</span>
                </li>
                <li>
                    Esito definitivo: <span>{fase.esito_definitivo}</span>
                </li>
                <li>
                    Sede: <span>{fase.sede}</span>
                </li>
                <li>
                    Spese: <span>{fase.spese}</span>
                </li>
                <li>
                    Data presentazione:{' '}
                    <span>
                        {funFormatDate(String(fase.data_presentazione))}
                    </span>
                </li>
                <li>
                    Data convocazione:{' '}
                    <span>{funFormatDate(String(fase.data_convocazione))}</span>
                </li>
            </ul>
            <div className="flex justify-between py-1">
                <Link to={`/fase_detail/${fase.id}`}>Dettaglio Fase</Link>
                {currentId === fase?.id && (
                    <Link to={`/form_fase/${fase?.ricorsi_id}`}>
                        Aggiorna la Fase
                    </Link>
                )}
            </div>
        </>
    );
};

export default CardDetails;
