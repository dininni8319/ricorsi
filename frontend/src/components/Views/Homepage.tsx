import { useState, useEffect } from "react";
import { baseURL } from "../Utilities/index";
import Loader3 from '../UI/Loaders/Loader3/index';
import Aside from '../UI/Aside/index';
import Card from '../UI/Card/index';

const Homepage = () => {

    const [ ricorsi, setRicorsi ] = useState([]);
    
    // useEffect(() => {
    //     fetch(`${baseURL}/api/ricorsi/`)
    //       .then(response => response.json())
    //       .then(data => setRicorsi(data?.dati_mensili))
    //       .catch((e) => console.log(e, 'testing the erro'))
    // }, [])

    
    return (
        <div className="height-custom">
            <div className='w-30'>
                <Aside></Aside>
            </div>
            <div className="flex justify-center align-middle homepage-body-style">
                <Loader3 />
            </div>
        </div>
    )
}

export default Homepage;
