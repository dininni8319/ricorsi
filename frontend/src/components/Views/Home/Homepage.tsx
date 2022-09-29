import { useState, useEffect } from "react";
import { baseURL } from "../../Utilities/index";
import Loader3 from '../../UI/Loaders/Loader3/index';
import Aside from '../../UI/Aside/index';
import Card from '../../UI/Card/index';
import { WrapperStyleComponent } from "./style";
import useApiRequest from '../../state/useApiRequest';

const Homepage = () => {
 
    const [ { status, response }, makeRequest ] = useApiRequest(
        `${baseURL}/api/cienneffe/ricorsi/`, {
            verb: 'get',
        }
    )
    
    useEffect(() => {
        const data =  makeRequest();
    },[])
    
    return (
        <div className="height-custom">
            {/* <>
                <Aside></Aside>
            </> */}
            <WrapperStyleComponent>
                <> 
                    { response ? response?.data?.ricorsi?.map((ricorsi: any, id:number) => {
                        return (
                            <Card 
                                ricorsi={ricorsi}
                                id={id}
                                key={id}
                            />
                        )
                    }): <Loader3 />}
                </>
            </WrapperStyleComponent>
        </div>
    )
}

export default Homepage;
