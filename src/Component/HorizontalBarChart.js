import React from 'react';
import mydata from '../MyInfo.json';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function Chart() {
    const options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
        
        },
      };
      
      const labels = mydata.categories;
      
      const data = {
        labels,
        datasets: [
          {
            label: "Skill", 
            data: mydata.data,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgba(0, 102, 204, 0.5)',
          },
        ],
      };
  return <Bar options={options} data={data} />;
}
export default Chart; 
