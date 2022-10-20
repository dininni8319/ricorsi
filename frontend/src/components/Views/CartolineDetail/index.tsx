import { Link } from "react-router-dom";
import { RicorsoProps } from "../../interfaces/interfaces";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent } from "../RicorsiDetail/style";
import { DetailPage, Loader3 } from "../../UI/index";
import useApiRequest from "../../state/useApiRequest";
import { funFormatDate } from "../../Utilities/index";
import { ConfigContext } from "../../../Contexts/Config";

const CartolineDetail = () => {
  let { slug } = useParams();
  let navigate = useNavigate();
  let {
    api_urls: { backend },
  } = useContext(ConfigContext);
  let { payload, setData } = useFetch(
    `${backend}/api/cienneffe/detail_cartoline/${slug}`,
    {
      verb: "get",
    }
  );

  const [{ status, response }, makeRequest] = useApiRequest(
    `${backend}/api/cienneffe/cartolina/delete/${slug}`,
    {
      verb: "delete",
    }
  );

  let { cartolina }: any = payload;

  const handleDelete = (e: any) => {
    e.preventDefault();
    makeRequest();
    navigate("/");
  };

  return (
    <DetailStyleComponent>
      <>
        <h1 className="mb-2 text-center">
          Descrizione della Cartolina:{" "}
          <span>{cartolina?.descrizione_mandante}</span>
        </h1>
        {cartolina ? (
          <DetailPage slug={slug}>
            <ul className="ul-detail-style">
              <li>
                Nome e Cognome:<span>{cartolina.nome_cognome_debitore}</span>
              </li>
              <li>
                Codice Mandante:<span>{cartolina.codice_mandate}</span>
              </li>
              <li>
                CF/PIVA: <span>{cartolina.cf_piva_debitore}</span>
              </li>
              <li>
                Ndg: <span>{cartolina.ndg}</span>
              </li>
              <li>
                Data Spedizione:{" "}
                <span>{funFormatDate(cartolina.data_spedizione)}</span>
              </li>
              <li>
                Numero Raccomandata:{" "}
                <span>{cartolina.numero_raccomandata}</span>
              </li>
              <li>
                Data Notifica:{" "}
                <span>{funFormatDate(cartolina.data_notifica)}</span>
              </li>

              <li>
                Esito notifica: <span>{cartolina.esito_notifica}</span>
              </li>
              <li>
                Chiave Pratica: <span>{cartolina.chiave_pratica}</span>
              </li>
              <li>
                Fase: <span>{cartolina.fase}</span>
              </li>
              {/* <li>
                          Data notifica Sentenza: <span>{cartolina.data_notifica_sentenza}</span>
                      </li> */}
            </ul>
          </DetailPage>
        ) : (
          <Loader3 />
        )}
      </>
      <section className="links-detail-page mt-5">
        {cartolina && (
          <div className="md:flex md:justify-between md:items-end py-2">
            <Link to={`/work_flow/${slug}`}>Aggiorna la Cartolina</Link>
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

export default CartolineDetail;
