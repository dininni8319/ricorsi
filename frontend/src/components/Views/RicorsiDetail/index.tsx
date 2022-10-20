import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Fasi } from "../../interfaces/interfaces";
import { baseURL } from "../../Utilities/index";
import useFetch from "../../../Hooks/useFetch";
import { DetailStyleComponent } from "./style";
import useApiRequest from "../../state/useApiRequest";
import { WrapperStyleComponent } from "../Home/style";
import { Card, DetailPage, Loader3, RemainderForm, ButtonDelete } from "../../UI/index";
import { faseCurrent, funFormatDate } from "../../Utilities/index";
import Details from './details';
import CardDetails from "./cardDetails";

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
           <Details ricorso={ricorso}/>

            <section className="md:flex md:flex-col">
              <WrapperStyleComponent>
                {currentFasis?.map((fase: Fasi, id: number) => {
                  return (
                    <Card
                      id={id}
                      taxunit={fase}
                      path="fase/delete"
                      current={currentFasis}
                      setCurrent={setCurrentFasis}
                    >
                      <CardDetails 
                        fase={fase} 
                        currentId={currentId} 
                      />

                    </Card>
                  );
                })}
              </WrapperStyleComponent>
              <section className="links-detail-page">
                {/* //you can use a fragment or a custom wrapper */}
                {ricorso && (
                  <div className="flex justify-around items-end py-2">
                    <Link
                      to={`/form_fase/${ricorso?.id}`}
                      className="primaryBtn"
                    >
                      Avvia una Fase
                    </Link>
                    <Link to={`/ricorsi/${ricorso?.id}`} className="mx-1">
                      Aggiorna Ricorso
                    </Link>
                    <ButtonDelete  handleDelete={handleDelete}/>
                  </div>
                )}
              </section>
              <RemainderForm slug={slug} />
            </section>
          </>
        </DetailPage>
      ) : (
        <Loader3 />
      )}
    </DetailStyleComponent>
  );
};

export default RicorsiDetail;
