import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { arrMonths1 } from './utilities/functionalities';

const LineChart = ({ data }) => {

    const chartData = {
        labels: arrMonths1?.map(el => el),
        datasets: [{
            label: 'Importi Atti Rettificati',
            data: data?.map(data => data.importo_atti_rettificati),
            backgroundColor: ['rgb(0,166,233'],
            borderColor: '#6D6E72',
            borderWidth: 1,
        },
        {      
            label: 'Importi Atti Annullati',
            data: data?.map(data => data.importo_atti_annullati),
            backgroundColor: ['#E04130'],
            borderColor: '#6D6E72',
            borderWidth: 1,
        }]  
    }

    return <Line  
               data={chartData} 
              /*  height="300px"*/
               width="40%" 
               options={{ maintainAspectRatio: false }}
            />
}

export default LineChart;
