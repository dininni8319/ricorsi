import { arrMonths1, arrMonths, baseURL } from './components/utilities/functionalities';
import Chart from 'chart.js/auto';
import Log from 'laravel-mix/src/Log';

    let baseUrl = (window.location).href; // You can also use document.URL
    let strUrl = baseUrl.substring(baseUrl.lastIndexOf('=') + 1).split(''); 

    let num = '';
    for (let i = strUrl.length; i >= 0 ; i--) {
        const el = strUrl[i];
        
       if(el !== undefined && el !== '/') {
            num += el;
        } else if (el === '/') {
            break
        }
    }

    let result = num.split('').reverse().join('')

    async function getNotifications() {
        const response = await fetch(`${baseURL}/api/notifiche_lotti/${result}`);
     
        if(response.ok) {
            const data = await response.json();
console.log(response)
            return data.notifiche_mensili;
        } 
    }
    
    async function renderNotification() {
        const notification = await getNotifications();
         
        let objValues = Object.keys(notification).map(key => notification[key])
     
       /*  for (const key in notification) {
            if (Object.hasOwnProperty.call(notification, key)) {
                const el = notification[key];
               
                let notificationValidation = key === 'notifiche_positive' 
                || key === 'notifiche_negative' 
                || key === 'cartoline_ritorno_inserite'
                || key === 'nr_atti_annullati'
                || key === 'nr_atti_spediti'
                || key === 'numero_atti_rinotificare'
                
                if (notificationValidation) {
                    arr = [ ...arr,el]
                }      
            }
        } */
        
        const ctx = document?.getElementById('chart-js')?.getContext('2d');

        const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrMonths?.map(el => el),
            datasets: [{
                label: 'Notifiche Totali',
                data: objValues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                   
                ],

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                  
                ],

                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    }
    
    renderNotification();
   

    