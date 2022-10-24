import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent } from "../RicorsiDetail/style";
import { DetailPage, Loader3, ButtonDelete } from "../../UI/index";
import useApiRequest from "../../state/useApiRequest";
import { funFormatDate } from "../../Utilities/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const LottiSpedizioneDetail = () => {
  let { slug } = useParams();
  let navigate = useNavigate();

  let { payload, setData } = useFetch(
    `${baseURL}/api/cienneffe/detail_riscossione/${slug}`,
    {
      verb: "get",
    }
  );

  const [{ status, response }, makeRequest] = useApiRequest(
    `${baseURL}/api/cienneffe/cartolina/delete/${slug}`,
    {
      verb: "delete",
    }
  );

  let { data: riscossione }: any = payload;

  const handleDelete = (e: any) => {
    e.preventDefault();
    makeRequest();
    navigate("/");
  };

  return (
    <DetailStyleComponent>
      <>
        <h1 className="mb-2 text-center">
          Descrizione della Riscossione:{" "}
          <span>{riscossione?.descrizione_spedizione}</span>
        </h1>
        {riscossione ? (
          <DetailPage slug={slug}>
            <ul className="ul-detail-style">
              <li>
                Entrata Tributo: <span>{riscossione.entrata_tributo}</span>
              </li>
              <li>
                Tipologia Documenti:{" "}
                <span>{riscossione.tipologia_documenti}</span>
              </li>
              <li>
                Tipologia Spedizioni:{" "}
                <span>{riscossione.tipologia_spedizioni}</span>
              </li>
              <li>
                Nr. Atti: <span>{riscossione.nr_atti}</span>
              </li>
              <li>
                Data Consegna al Service:{" "}
                <span>{funFormatDate(riscossione.data_consegna_service)}</span>
              </li>
              <li>
                Numero Atti Spediti: <span>{riscossione.nr_atti_spediti}</span>
              </li>
              <li>
                Data Conferma Anteprime:{" "}
                <span>
                  {funFormatDate(riscossione.data_conferma_anteprime)}
                </span>
              </li>

              <li>
                Cartoline di Ritorno Inserite:{" "}
                <span>{riscossione.cartoline_ritorno_inserite}</span>
              </li>
              <li>
                Notifiche Positive:{" "}
                <span>{riscossione.notifiche_positive}</span>
              </li>
              <li>
                Notifiche Negative:{" "}
                <span>{riscossione.notifiche_negative}</span>
              </li>
              <li>
                Numero di Atti da Rinotificare:{" "}
                <span>{riscossione.numero_atti_rinotificare}</span>
              </li>
              <li>
                Numero di Atti Annulati:{" "}
                <span>{riscossione.nr_atti_annullati}</span>
              </li>
              <li>
                Importo Atti Annullati:{" "}
                <span>{riscossione.importo_atti_annullati}</span>
              </li>
              <li>
                Atti REttificati: <span>{riscossione.atti_rettificati}</span>
              </li>
              <li>
                Importo Atti Rettificati:{" "}
                <span>{riscossione.importo_atti_rettificati}</span>
              </li>
            </ul>
          </DetailPage>
        ) : (
          <Loader3 />
        )}
      </>
      <section className="links-detail-page mt-5">
        {riscossione && (
          <div className="md:flex md:justify-between md:items-end py-2">
            <Link to={`/form_riscossione/${slug}`}>
              Aggiorna la Riscossione
            </Link>
            <Link to={`/form_rendicondazione/`}>
              Avvia una Rendicontazione
            </Link>
            <>
          
              <button
                onClick={(event) => handleDelete(event)}
                className="text-red-600 outline-none cursor-pointer w-18 px-3 py-2 font-semibold"
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className={`fa-1x`}
                />
              </button>
            </>
          </div>
        )}
      </section>
    </DetailStyleComponent>
  );
};

export default LottiSpedizioneDetail;
