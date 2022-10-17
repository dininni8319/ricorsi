import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Fasi } from "../../interfaces/interfaces";
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent } from "./style";
import useApiRequest from "../../state/useApiRequest";
import { WrapperStyleComponent } from "../Home/style";
import { Card, DetailPage, Loader3, RemainderForm } from "../../UI/index";
import { faseCurrent, funFormatDate } from "../../Utilities/index";

const RicorsiDetail = () => {
  let { slug } = useParams();
  let navigate = useNavigate();
  const [currentFasis, setCurrentFasis] = useState<{ [key: string]: string }[]>(
    []
  );

  let { payload } = useFetch(
    `${baseURL}/api/cienneffe/detail_ricorso/${slug}`,
    { verb: "get" }
  );

  useEffect(() => {
    fetch(`${baseURL}/api/cienneffe/current_fasis/${slug}`)
      .then((response) => response.json())
      .then((data) => setCurrentFasis([...data.fasi]))
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  let { payload: currentFase } = useFetch(
    `${baseURL}/api/cienneffe/last_fase/${currentFasis[0]?.ricorsi_id}`,
    {
      verb: "get",
    }
  );

  let { id: currentId }: any = currentFase;

  const [{ status, response }, makeRequest] = useApiRequest(
    `${baseURL}/api/cienneffe/ricorso/delete/${slug}`,
    {
      verb: "delete",
    }
  );

  let { ricorso }: any = payload;

  const handleDelete = (e: any, id?: number) => {
    e.preventDefault();
    makeRequest();
    navigate("/");
  };

  return (
    <DetailStyleComponent>
      <h1 className="mb-2 text-center pr-1">
        Tributo: <span>{ricorso?.tributo}</span>
      </h1>
      {ricorso ? (
        <DetailPage slug={slug}>
          <>
            <ul className="ul-detail-style">
              <li>
                Nominativo:<span>{ricorso.nominativo}</span>
              </li>
              <li>
                Numero Ricorso:
                <span>{ricorso.numero_ricorso}</span>
              </li>
              <li>
                Tributo:<span>{ricorso.tributo}</span>
              </li>
              <li>
                Ente:<span>{ricorso.ente}</span>
              </li>
              <li>
                Anno imposta:<span>{ricorso.anno_imposta}</span>
              </li>
              <li>
                Importo Atto:<span>{ricorso.importo_atto}</span>
              </li>
              <li>
                Esito:<span>{ricorso.esito}</span>
              </li>

              <li>
                Numero di protocollo interno:
                <span>{ricorso.numero_protocollo_interno}</span>
              </li>
              <li>
                Indirizzo:<span>{ricorso.indirizzo}</span>
              </li>
              <li>
                Email:<span>{ricorso.mail}</span>
              </li>
              <li>
                Telefono:<span>{ricorso.telefono}</span>
              </li>

              <li>
                Cod. Fiscale/P.Iva:
                <span>{ricorso.cf_piva}</span>
              </li>
              <li>
                Cod. Fiscale/P.Iva:
                <span>{ricorso.tipologia_atto}</span>
              </li>
              <li>
                <p className="font-serif mt-5">
                  Oggetto Ricorso: <span>{ricorso.oggetto_ricorso}</span>
                </p>
              </li>
            </ul>
          
            <section className="md:flex md:flex-col">
              <WrapperStyleComponent>
                {currentFasis?.map((fase: Fasi, id: number) => {
                  return (
                    <Card
                      taxunit={fase}
                      key={id}
                      path="fase/delete"
                      current={currentFasis}
                      setCurrent={setCurrentFasis}
                    >
                      <>
                        <h3 className="card-title mb-2">
                          Fase corrente: <span>{faseCurrent(fase.fase)}</span>
                        </h3>
                        <ul className="border-custom ul-style-custom">
                          <li>
                            Esito: <span>{fase.esito}</span>
                          </li>
                          <li>
                            Esito definitivo:{" "}
                            <span>{fase.esito_definitivo}</span>
                          </li>
                          <li>
                            Sede: <span>{fase.sede}</span>
                          </li>
                          <li>
                            Spese: <span>{fase.spese}</span>
                          </li>
                          <li>
                            Data presentazione:{" "}
                            <span>
                              {funFormatDate(String(fase.data_presentazione))}
                            </span>
                          </li>
                          <li>
                            Data convocazione:{" "}
                            <span>
                              {funFormatDate(String(fase.data_convocazione))}
                            </span>
                          </li>
                        </ul>
                        <div className="flex justify-between py-1">
                          <Link to={`/fase_detail/${fase.id}`}>
                            Dettaglio Fase
                          </Link>
                          {currentId === fase?.id && (
                            <Link to={`/form_fase/${fase?.ricorsi_id}`}>
                              Aggiorna la Fase
                            </Link>
                          )}
                        </div>
                      </>
                    </Card>
                  );
                })}
              </WrapperStyleComponent>
              <RemainderForm slug={slug} />
            </section>
          </>
        </DetailPage>
      ) : (
        <Loader3 />
      )}

      <section className="links-detail-page">
        {/* //you can use a fragment or a custom wrapper */}
        {ricorso && (
          <div className="flex justify-between items-end py-2">
            <Link to={`/form_fase/${ricorso?.id}`} className="primaryBtn">
              Avvia una Fase
            </Link>
            <Link to={`/ricorsi/${ricorso?.id}`}>Aggiorna Ricorso</Link>
            <button
              onClick={(e) => handleDelete(e)}
              className="bg-red-500 text-white outline-none cursor-pointer w-18 px-3 py-2 font-semibold"
            >
              Cancella
            </button>
          </div>
        )}
      </section>
    </DetailStyleComponent>
  );
};

export default RicorsiDetail;
