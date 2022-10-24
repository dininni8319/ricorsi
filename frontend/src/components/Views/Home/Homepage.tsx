import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { ObjFormType } from "../../interfaces/interfaces";
import { baseURL } from "../../Utilities/index";
import useHttp from "../../../Hooks/useHttp";
import { Card, Loader3 } from "../../UI/index";
import { WrapperStyleComponent } from "./style";
import Searched from "./Searched";
import CardDetail from "./CardDetail";

const Homepage = () => {
  const [ricorsi, setRicorsi] = useState<ObjFormType[]>([]);

  const handleRicorsi = useCallback(({ ricorsi }:{ ricorsi: ObjFormType[]}) => {
    setRicorsi(() => [...ricorsi]);
  },[])

  const { isLoading, error, sendRequest: fetchRicorsi } = useHttp(handleRicorsi);

  useEffect(() =>  {
    fetchRicorsi({url:`${baseURL}/api/cienneffe/ricorsi`}) 
  }, [fetchRicorsi]);
  

  return (
    <div className="height-custom flex flex-col items-center">
      <>
        <Searched />
        <h1>Ricorsi</h1>
      </>
      <WrapperStyleComponent>
        <>
          {ricorsi && !isLoading ? (
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
                   <CardDetail
                     id={id}
                     ricorso={ricorso}
                   />
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
