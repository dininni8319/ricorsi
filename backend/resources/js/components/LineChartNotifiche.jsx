import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { arrMonths1 } from './utilities/functionalities';

const LineChartNotifiche = ({ notificheMensili }) => {

    const chartData = {
        labels: arrMonths1?.map(el => el),
        datasets: [{
            label: 'Notifiche positive',
            data: notificheMensili?.notifiche_mensili.map(el => el.notifiche_positive),
            backgroundColor: ['rgb(0,166,233'],
            borderColor: '#6D6E72',
            borderWidth: 1,
        },
        {
            label: 'Notifiche negative',
            data: notificheMensili?.notifiche_mensili.map(el => el.notifiche_negative),
            backgroundColor: ['rgb(255,0,255'],
            borderColor: '#6D6E72',
            borderWidth: 1,
        },
        {
            label: 'Notifiche da rinotificare',
            data: notificheMensili?.notifiche_mensili.map(el => el.numero_atti_rinotificare),
            backgroundColor: ['rgb(0,128,0'],
            borderColor: '#6D6E72',
            borderWidth: 1,
        },
        {
            label: 'Notifiche cartoline di ritorno',
            data: notificheMensili?.notifiche_mensili.map(el => el.cartoline_ritorno_inserite),
            backgroundColor: ['rgb(	255,0,0'],
            borderColor: '#6D6E72',
            borderWidth: 1,
        },
        {
            label: 'Atti annullati',
            data: notificheMensili?.notifiche_mensili.map(el => el.nr_atti_annullati),
            backgroundColor: ['rgb(255,255,0'],
            borderColor: '#6D6E72',
            borderWidth: 1,
        },
        {
            label: 'Atti rettificati',
            data: notificheMensili?.notifiche_mensili.map(el => el.atti_rettificati),
            backgroundColor: ['rgb(245,245,220'],
            borderColor: '#6D6E72',
            borderWidth: 1,
        },
    ]}

    return <Line  
               data={chartData} 
              /*  height="300px"*/
               width="40%" 
               options={{ maintainAspectRatio: false }}
            />
}

export default LineChartNotifiche;
