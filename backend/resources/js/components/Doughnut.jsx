import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { arrMonths } from './utilities/functionalities';

const AreaChart = ({ notifiche }) => {
    let notif =
        notifiche &&
        Object.keys(notifiche)
            .map((keys, id) => notifiche[keys])
            .filter((el) => typeof el === 'number');

    const obj = {
        labels: arrMonths?.map((el) => el),

        datasets: [
            {
                label: 'Notifiche positive',
                data: notif,
                backgroundColor: [
                    'rgb(250,235,215)',
                    'rgb(255,0,0)',
                    'rgb(255,255,0)',
                    'rgb(70, 130 , 180)',
                    'rgb(255,127,80)',
                    'rgb(0,255,0)'
                ],
                borderColor: '#6D6E72',
                borderWidth: 1
            }
        ]
    };
    return (
        <div>
            <h1>Notifiche</h1>
            <Doughnut data={obj} />
        </div>
    );
};

export default AreaChart;
