import { useState, useEffect, useCallback, useContext, ChangeEvent } from "react";
import { Card, Loader3, Search, ImportCsv } from "../../UI/index";
import { WrapperStyleComponent } from "../Home/style";
import { ConfigContext } from "../../../Contexts/Config";
import DetailsCard from "./detailsCard";
import SearchedDetails from "./searchedDetails";
import useHttp from "../../../Hooks/useHttp";
import useSearch from '../../../Hooks/useSearch';

const CartolinePage = () => {
  const {
    api_urls: { backend },
  } = useContext(ConfigContext);
  const [cartoline, setCartoline] = useState<{ [key: string]: string }[]>([]);
  const [searchedCartoline, setSearchedCartoline] = useState<any>([]);

  const handleCartoline = useCallback(( {data }: { data: { [key: string]: string }[]}) => {
    setCartoline(() => [...data]);
  },[])

  const { isLoading, error, sendRequest: fetchCartoline } = useHttp(handleCartoline);
  const {
    searchedTerm,
    selectedItem,
    cardId,
    handleSelectedItem,
    handleChange,
    handleResetSearch,
    handleNavigate,
  } = useSearch(setSearchedCartoline);

  useEffect(() =>  {
    fetchCartoline({url:`${backend}/api/cienneffe/cartoline`}) 
  }, [fetchCartoline]);

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

  return (
    <div className="height-custom flex flex-col items-center">
      <>
        <Search
          title="Cartolina"
          handleChange={handleChange}
          handleResetSearch={handleResetSearch}
        >
          {searchedCartoline?.slice(0,6).map((searched: { [key: string]: string }, id: number) => {
            return (
              <SearchedDetails 
                // key={id}
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
                    <DetailsCard  cartolina={cartolina}/>
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
