import { Link } from "react-router-dom";
import { useState, useEffect, useRef, ChangeEvent, useCallback } from "react";
import { baseURL } from "../../Utilities/index";
import { Card, Loader3, Search } from "../../UI/index";
import { WrapperStyleComponent } from "../Home/style";
import { funFormatDate } from "../../Utilities/index";
import { RiSliceLine } from "react-icons/ri";
import useSearch from '../../../Hooks/useSearch';

const RiscossionePage = () => {
  const [riscossioni, setRiscossioni] = useState<{ [key: string]: string }[]>(
    []
  );
  const [searchedRiscossione, setSearchedRiscossione] = useState<any>([]);
  const {
    searchedTerm,
    selectedItem,
    cardId,
    handleSelectedItem,
    handleChange,
    handleResetSearch,
    handleNavigate,
  } = useSearch(setSearchedRiscossione);

  useEffect(() => {
    fetch(`${baseURL}/api/cienneffe/riscossione`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setRiscossioni(() => [...data?.data]);
        }
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (searchedTerm.length > 3) {
      fetch(`${baseURL}/api/cienneffe/riscossione/search=${searchedTerm}`)
        .then((response) => response.json())
        .then((data) => setSearchedRiscossione(data?.data))
        .catch((error: unknown) => {
          console.log(error);
        });
    }
  }, [searchedTerm]);


  return (
    <div className="height-custom flex flex-col items-center">
      <>
        <Search
          title="Riscossione"
          handleChange={handleChange}
          handleResetSearch={handleResetSearch}
        >
          {searchedRiscossione?.slice(0,6).map((searched: { [key: string]: string }) => {
            return (
              <ul
                className={`bg-white p-2 shadow-md border-slate-400 ${
                  selectedItem && cardId === parseInt(searched.id)
                    ? "active-class"
                    : ""
                }`}
                onMouseOver={() =>
                  handleSelectedItem(parseInt(searched?.id))
                }
                onClick={() => handleNavigate('detail_riscossione', parseInt(searched.id))}
              >
                <li>
                  <span className="font-semibold pr-1">
                    Descrizione Spedizione:
                  </span>
                  {searched.descrizione_spedizione}
                </li>
                <li>
                  <span className="font-semibold pr-1">
                    Notifiche Positive:
                  </span>
                  {searched.notifiche_positive}
                </li>
                <li>
                  <span className="font-semibold pr-1">
                    Data di Consegna al Service:
                  </span>
                  {funFormatDate(searched.data_consegna_service)}
                </li>
                <Link to={`/detail_riscossione/${searched.id}`}>
                  Dettaglio Lotto di Spedizione
                </Link>
              </ul>
            );
          })}
        </Search>
        <h1>Lotto di Spedizione</h1>
      </>
      <WrapperStyleComponent>
        <>
          {riscossioni ? (
            riscossioni?.map((riscossione, id: number) => {
              return (
                <>
                  <Card
                    id={id}
                    taxunit={riscossione}
                    path="riscossione/delete"
                    current={riscossioni}
                    setCurrent={setRiscossioni}
                  >
                    <>
                      <h3 className="card-title mb-3">
                        Descrizione spedizione:{" "}
                        <span>{riscossione.descrizione_spedizione}</span>
                      </h3>

                      <ul className="border-custom ul-style-custom">
                        <li>
                          <span className="font-semibold pr-1">
                            Entrata Tributo:
                          </span>
                          {riscossione.entrata_tributo}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">
                            Tipologia Spedizione:
                          </span>
                          {riscossione.tipologia_spedizioni}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">
                            Tipologia Documenti:
                          </span>
                          {riscossione.tipologia_documenti}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">
                            Numeri Atti:
                          </span>
                          {riscossione.nr_atti}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">
                            Data di Consegna al Service:
                          </span>
                          {funFormatDate(riscossione.data_consegna_service)}
                        </li>
                        <li>
                          <p className="font-serif text-sm">
                            <span className="font-semibold pr-1">
                              Numberi Atti Spediti:
                            </span>
                            {riscossione.nr_atti_spediti}
                          </p>
                        </li>
                      </ul>

                      <div className="flex justify-between py-1">
                        <Link to={`/form_riscossione/${riscossione.id}`}>
                          Aggiorna il Lotto di Spedizione
                        </Link>
                        <Link to={`/detail_riscossione/${riscossione.id}`}>
                          Dettaglio Lotto di Spedizione
                        </Link>
                      </div>
                    </>
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

export default RiscossionePage;
