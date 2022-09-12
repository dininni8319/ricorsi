import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Doughnut from './components/Doughnut';
import LineChart from './components/LineChart';
import LineChartNotifiche from './components/LineChartNotifiche';
import { baseURL } from './components/utilities/functionalities';

const App = () => {

    const [ data, setData ] = useState();
    const [ notifiche, setNotifiche ] = useState();
    const [notificheMensili, setNotificheMensili] = useState();

    useEffect(() => {
        fetch(`${baseURL}/api/chart_data`)
          .then(response => response.json())
          .then(data => setData(data.dati_mensili))
          .catch((e) => console.log(e, 'testing the erro'))

          fetch(`${baseURL}/api/notifiche_totali`)
            .then(response => response.json())
            .then(data => setNotifiche(data))
            .catch((e) => console.log(e, 'testing the erro'))
    

            fetch(`${baseURL}/api/chartNotifiche`)
            .then(response => response.json())
            .then(data => setNotificheMensili(data))
            .catch((e) => console.log(e, 'testing the erro'))
    },[]);
        
    return (

        <>
            <div className='cart-class-custom '>
                
                <LineChart  
                    data={data}
                /> 
               
            </div>
       
            <div className='container'>
                <div className='d-flex '>
                    <Doughnut 
                            notifiche={notifiche}
                    /> 
                     <LineChartNotifiche  
                    notificheMensili={notificheMensili} 
                />
                </div> 
            </div>
        </>
    )
}

if(document.getElementById('AreaChart')){
    ReactDOM.render(<App />, document.getElementById('AreaChart'))
}

