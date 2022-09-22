import { useState, useEffect } from "react";
import { baseURL } from "../../Utilities/index";
import Loader3 from '../../UI/Loaders/Loader3/index';
import Aside from '../../UI/Aside/index';
import Card from '../../UI/Card/index';
import { WrapperStyleComponent } from "./style";
const Homepage = () => {

    const [ ricorsi, setRicorsi ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        fetch(`${baseURL}/api/cienneffe/ricorsi/`)
          .then(response => response.json())
          .then(data => {
            setIsLoading(false);
            setRicorsi(data.ricorsi); 
          }
            )
          .catch((e) => alert(e))
    },[])
    
    return (
        <div className="height-custom">
            <>
                <Aside></Aside>
            </>
            <WrapperStyleComponent>
                <> 
                    {isLoading ? <Loader3 /> : ricorsi?.map((ricorsi, id:number) => {
                        return (
                            <Card 
                                ricorsi={ricorsi}
                                id={id}
                            />
                        )
                    })}
                </>
            </WrapperStyleComponent>
        </div>
    )
}

export default Homepage;
