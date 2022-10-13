import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from 'react-router';
import { baseURL } from "../../Utilities/index";
import { ObjFormType } from "../../interfaces/interfaces";
import { Card, Loader3, Search } from "../../UI/index";
import { WrapperStyleComponent } from "../Home/style";

const CartolinePage = () => {
  const [cartoline, setCartoline] = useState<{ [key: string]: string }[]>([]);
  const [searchedCartoline, setSearchedCartoline] = useState<any>([]);
  const [searchedTerm, setSearchedTerm] = useState("");

  const [selectedItem, setSelectedItem] = useState(false);
  let [ cardId, setCardId ] = useState<number>(0);
  
  const handleSelectedItem = (e:any, id: number) => {
    
    if (id) {
      setSelectedItem(true);
      setCardId(id);
    }
  }

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
     navigate(`/detail_cartoline/${id}`);
  }
  useEffect(() => {
    fetch(`${baseURL}/api/cienneffe/cartoline`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cartoline) {
          setCartoline(() => [...data?.cartoline]);
        }
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (searchedTerm.length > 3) {
      fetch(`${baseURL}/api/cienneffe/cartolina/search=${searchedTerm}`)
        .then((response) => response.json())
        .then((data) => setSearchedCartoline(data?.cartoline))
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
          title="Cartolina" 
          handleChange={handleChange} 
          setSearchFC={setSearchedCartoline}
          setSearchedTerm={setSearchedTerm}
        >
          {searchedCartoline?.map((searched: { [key: string]: string }) => {
            return (
              <ul 
                className={`bg-white p-2 shadow-md ${selectedItem && cardId === parseInt(searched.id) ? 'active-class' : ''}`} 
                onMouseOver={(e) => handleSelectedItem(e, parseInt(searched?.id))}
                onClick={() => handleNavigate(parseInt(searched.id))}
              >
                <li>
                  <span className="font-semibold pr-1">Nome e Cognome:</span>
                  {searched.nome_cognome_debitore}
                </li>
                <li>
                  <span className="font-semibold pr-1">C.F/P.I:</span>
                  {searched.cf_piva_debitore}
                </li>
                <li>
                  <span className="font-semibold pr-1">Data Notifica:</span>
                  {searched.data_notifica}
                </li>
                <Link to={`/detail_cartoline/${searched.id}`}>
                  Dettaglio Cartolina
                </Link>
              </ul>
            );
          })}
        </Search>
        <h1>Cartoline</h1>
      </>
      <WrapperStyleComponent>
        <>
          {cartoline ? (
            cartoline?.map((cartolina, id: number) => {
              return (
                <>
                  <Card
                    taxunit={cartolina}
                    key={id}
                    path="cartolina/delete"
                    current={cartoline}
                    setCurrent={setCartoline}
                  >
                    <>
                      <h3 className="card-title mb-3">
                        Mandante: <span>{cartolina.descrizione_mandante}</span>
                      </h3>

                      <ul className="border-custom ul-style-custom">
                        <li>
                          <span className="font-semibold pr-1">
                            Nome e Cognome:
                          </span>
                          {cartolina.nome_cognome_debitore}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">C.F/P.I:</span>
                          {cartolina.cf_piva_debitore}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">
                            Data Notifica:
                          </span>
                          {cartolina.data_notifica}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">NDG:</span>
                          {cartolina.ndg}
                        </li>
                        <li>
                          <span className="font-semibold pr-1">Esito:</span>
                          {cartolina.esito_notifica}
                        </li>
                        <li>
                          <p className="font-serif text-sm">
                            <span className="font-semibold pr-1">
                              Chiave Pratica:
                            </span>
                            {cartolina.chiave_pratica}
                          </p>
                        </li>
                      </ul>

                      <div className="flex justify-between py-1">
                        <Link to={`/work_flow/${cartolina.id}`}>
                          Aggiorna cartolina
                        </Link>
                        <Link to={`/detail_cartoline/${cartolina.id}`}>
                          Dettaglio cartolina
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

export default CartolinePage;
