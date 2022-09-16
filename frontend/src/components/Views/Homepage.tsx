import { useState, useEffect } from "react";
import { baseURL } from "../Utilities/index";
import Loader3 from '../UI/Loaders/Loader3/index';
import Aside from '../UI/Aside/index';
import Card from '../UI/Card/index';

const Homepage = () => {

    const [ ricorsi, setRicorsi ] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/api/ricorsi`)
          .then(response => response.json())
          .then(data => setRicorsi(data?.dati_mensili))
          .catch((e) => console.log(e, 'testing the erro'))
    }, [])

    console.log(ricorsi);
    
    return (
        <div className="height-custom flex">
            <div>

                <div className='flex'>
                   <Aside />
                   <div className='flex'>
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                   </div>
                </div>
            </div>
          
            
            {/*<Loader3 />*/}
        </div>
    )
}

export default Homepage;
