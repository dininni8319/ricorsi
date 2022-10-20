import { Link } from "react-router-dom";
import { RicorsoProps } from "../../interfaces/interfaces";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent } from "../RicorsiDetail/style";
import { DetailPage, Loader3 } from "../../UI/index";
import useApiRequest from "../../state/useApiRequest";
import { faseCurrent, funFormatDate } from "../../Utilities/index";
import { ConfigContext } from "../../../Contexts/Config";

const FasiDetail = () => {
  const {
    api_urls: { backend },
  } = useContext(ConfigContext);
  const { slug } = useParams();
  let navigate = useNavigate();

  let { payload, setData } = useFetch(
    `${backend}/api/cienneffe/detail_fase/${slug}`,
    {
      verb: "get",
    }
  );
  let { fase }: any = payload;

  let { payload: currentFase } = useFetch(
    `${backend}/api/cienneffe/last_fase/${fase?.ricorsi_id}`,
    {
      verb: "get",
    }
  );

  let { id: currentId }: any = currentFase;

  const [{ status, response }, makeRequest] = useApiRequest(
    `${backend}/api/cienneffe/fase/delete/${slug}`,
    {
      verb: "delete",
    }
  );

  const handleDelete = (e: any) => {
    e.preventDefault();
    makeRequest();
    navigate("/");
  };

  return (
    <DetailStyleComponent>
      <>
        <h1 className="mb-2 text-center">
          Fase: <span>{faseCurrent(fase?.fase)}</span>
        </h1>
        {fase ? (
          <DetailPage slug={slug}>
            <ul className="ul-detail-style">
              <li>
                Presentato da: <span>{fase.presentato}</span>
              </li>
              <li>
                Contro deduzioni Taxunit:{" "}
                <span>{fase.contro_deduzioni_tax_unit}</span>
              </li>
              <li>
                Contro deduzioni uff. Legale:{" "}
                <span>{fase.contro_deduzioni_uff_legale}</span>
              </li>
              <li>
                Data presentazione:{" "}
                <span>{funFormatDate(fase.data_presentazione)}</span>
              </li>
              <li>
                Sede: <span>{fase.sede}</span>
              </li>
              <li>
                Esito: <span>{fase.esito}</span>
              </li>
              <li>
                Esito definitivo: <span>{fase.esito_definitivo}</span>
              </li>

              <li>
                Motivazione: <span>{fase.motivazione}</span>
              </li>
              <li>
                Spese: <span>{fase.spese}</span>
              </li>
              <li>
                Data deposito Sentenza:{" "}
                <span>{funFormatDate(fase.data_deposito_sentenza)}</span>
              </li>
              <li>
                Data notifica Sentenza:{" "}
                <span>{funFormatDate(fase.data_notifica_sentenza)}</span>
              </li>
            </ul>
          </DetailPage>
        ) : (
          <Loader3 />
        )}
      </>

      <section className="links-detail-page mt-5">
        {fase && (
          <div className="md:flex md:justify-between md:items-end py-2">
            <Link to={`/ricorsi_detail/${fase.ricorsi_id}`}>
              Dettaglio Ricorso
            </Link>
            {currentId === fase?.id && (
              <Link to={`/form_fase/${fase?.ricorsi_id}`}>
                Aggiorna la Fase
              </Link>
            )}
            <>
              <button
                onClick={(event) => handleDelete(event)}
                className="bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold"
              >
                Cancella
              </button>
            </>
          </div>
        )}
      </section>
    </DetailStyleComponent>
  );
};

export default FasiDetail;
