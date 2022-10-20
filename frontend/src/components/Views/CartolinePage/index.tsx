import { Link } from "react-router-dom";
import { useState, useEffect, useContext, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { Card, Loader3, Search, ImportCsv } from "../../UI/index";
import { WrapperStyleComponent } from "../Home/style";
import { funFormatDate } from "../../Utilities/index";
import { ConfigContext } from "../../../Contexts/Config";
import DetailsCard from "./detailsCard";
import SearchedDetails from "./searchedDetails";

const CartolinePage = () => {
  const {
    api_urls: { backend },
  } = useContext(ConfigContext);
  const [cartoline, setCartoline] = useState<{ [key: string]: string }[]>([]);
  const [searchedCartoline, setSearchedCartoline] = useState<any>([]);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(false);
  let [cardId, setCardId] = useState<number>(0);
  const navigate = useNavigate();

  const handleSelectedItem = (e: any, id: number) => {
    if (id) {
      setSelectedItem(true);
      setCardId(id);
    }
  };

  const handleNavigate = (id: number) => {
    navigate(`/detail_cartoline/${id}`);
  };

  useEffect(() => {
    fetch(`${backend}/api/cienneffe/cartoline`)
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
      fetch(`${backend}/api/cienneffe/cartolina/search=${searchedTerm}`)
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
          {searchedCartoline?.slice(0,6).map((searched: { [key: string]: string }) => {
            return (
              <SearchedDetails 
                selectedItem={selectedItem}
                searched={searched}
                cardId={cardId}
                handleSelectedItem={handleSelectedItem} 
                handleNavigate={handleNavigate}
              />
            );
          })}
        </Search>
        <h1>Cartoline</h1>
        <ImportCsv />
      </>
      <WrapperStyleComponent>
        <>
          {cartoline ? (
            cartoline?.map((cartolina, id: number) => {
              return (
                <>
                  <Card
                    taxunit={cartolina}
                    id={id}
                    path="cartolina/delete"
                    current={cartoline}
                    setCurrent={setCartoline}
                  >
                    <DetailsCard  cartolina={cartolina} />
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
