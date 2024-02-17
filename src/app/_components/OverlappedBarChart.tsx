// Import necessary modules
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


// type billing ={
// mora:{
//   moraEps
//   moraArl
//   moraCaja
//   moraPension
//   moraCiudad
// }
// noMora:{
  // Lo contrario
// }
// }
const OverlappedBarChart = ({ data }: {data: number[]}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destroy previous chart instance if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['EPS', 'EPS y ARL', 'EPS, ARL Y CAJA', 'TODO INCLUIDO'],
            datasets: [{
              label: 'Cartera pendiente',
              data: data,
              backgroundColor: [
                'rgba(70, 130, 180, 1)',
                
              ],
              borderColor: [
                'rgba(70, 130, 180, 1)',
                
              ],
              borderWidth: 3,
              stack: 'Stack 1'
            },
            {
                label: 'Cartera Causada',
                data: data,
                backgroundColor: [
                  'rgba(169, 169, 169, 1)'
                  
                  
                ],
                borderColor: [
                  // 'rgba(255, 99, 132, 1)',

            
                  'rgba(169, 169, 169, 1)'
                ],
                borderWidth: 3,
                stack: 'Stack 1'
              }
        ]
          },
          options: {
            scales: {
                x:{
                    stacked: true
                },
                y: {
                    beginAtZero: true // Specify options for y-axis scale
                  }
            }
          }
        });
      }
    }

    return () => {
      // Cleanup function to destroy the chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default OverlappedBarChart;
