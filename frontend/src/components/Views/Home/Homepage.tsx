import { Link } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { baseURL } from "../../Utilities/index";
import { ObjFormType } from "../../interfaces/interfaces";
import { Card, Loader3, Search } from "../../UI/index";
import { WrapperStyleComponent } from "./style";

const Homepage = () => {
  const [ricorsi, setRicorsi] = useState<{ [key: string]: string }[]>([]);
  const [searchedRicorsi, setSearchedRicorsi] = useState<any>([]);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(false);
  let [cardId, setCardId] = useState<number>(0);

  const handleSelectedItem = (e: any, id: number) => {
    if (id) {
      setSelectedItem(true);
      setCardId(id);
    }
  };

  const navigate = useNavigate();
  const handleNavigate = (id: number) => {
    navigate(`/ricorsi_detail/${id}`);
  };

  useEffect(() => {
    fetch(`${baseURL}/api/cienneffe/ricorsi`)
      .then((response) => response.json())
      .then((data) => {
        if (data.ricorsi) {
          setRicorsi((prev) => [...data?.ricorsi]);
        }
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (searchedTerm.length > 3) {
      fetch(`${baseURL}/api/cienneffe/ricorsi/search=${searchedTerm}`)
        .then((response) => response.json())
        .then((data) => setSearchedRicorsi(() => [...data.ricorsi]))
        .catch((error: unknown) => {
          console.log(error);
        });
    }
  }, [searchedTerm]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedTerm(e.target.value);
  };

  return (
    <div className="height-custom flex flex-col items-center">
      <>
        <Search
          title="Ricorsi"
          handleChange={handleChange}
          setSearchFC={setSearchedRicorsi}
          setSearchedTerm={setSearchedTerm}
        >
          {searchedRicorsi?.map(
            (searched: { [key: string]: string }, id: number) => {
              return (
                <ul
                  className={`bg-white p-2 shadow-md ${
                    selectedItem && cardId === parseInt(searched.id)
                      ? "active-class"
                      : ""
                  }`}
                  onMouseOver={(e) =>
                    handleSelectedItem(e, parseInt(searched?.id))
                  }
                  onClick={() => handleNavigate(parseInt(searched.id))}
                  key={id}
                >
                  <li>
                    <span className="font-semibold pr-1">Numero Ricorso:</span>
                    {searched.numero_ricorso}
                  </li>
                  <li>
                    <span className="font-semibold pr-1">Ente:</span>
                    {searched.ente}
                  </li>
                  <li>
                    <span className="font-semibold pr-1">Anno imposta:</span>
                    {searched.anno_imposta}
                  </li>
                  <Link to={`/ricorsi_detail/${searched.id}`}>
                    Dettaglio Ricorso
                  </Link>
                </ul>
              );
            }
          )}
        </Search>
        <h1>Ricorsi</h1>
      </>
      <WrapperStyleComponent>
        <>
          {ricorsi ? (
            ricorsi?.map((ricorso, id: number) => {
              return (
                <>
                  <Card
                    taxunit={ricorso}
                    id={id}
                    path="ricorso/delete"
                    current={ricorsi}
                    setCurrent={setRicorsi}
                  >
                    <section key={id}>
                      <h3 className="card-title mb-3">
                        Tributo: <span>{ricorso.tributo}</span>
                      </h3>

                      <ul className="border-custom ul-style-custom">
                        <li>
                          <span className="font-semibold pr-1">
                            Numero Ricorso:
                          </span>
                          {ricorso.numero_ricorso}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">Ente:</span>
                          {ricorso.ente}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">
                            Anno imposta:
                          </span>
                          {ricorso.anno_imposta}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">
                            Importo Atto:
                          </span>
                          {ricorso.importo_atto}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">Esito:</span>
                          {ricorso.esito}
                        </li>
                        <li>
                          <p className="font-serif text-sm">
                            <span className="font-semibold pr-1">
                              Descrizione:
                            </span>
                            {ricorso.oggetto_ricorso}
                          </p>
                        </li>
                      </ul>

                      <div className="flex justify-between py-1">
                        <Link to={`/ricorsi/${ricorso.id}`}>
                          Aggiorna Ricorso
                        </Link>
                        <Link to={`/ricorsi_detail/${ricorso.id}`}>
                          Dettaglio Ricorso
                        </Link>
                      </div>
                    </section>
                  </Card>
                </>
              );
            })
          ) : (
            <Loader3 />
          )}
        </>
      </WrapperStyleComponent>
    </div>
  );
};

export default Homepage;
