import { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

interface BarChartProps {
  labels: string[];
  data: number[];
  title: string;
}

const BarChart: React.FC<BarChartProps> = ({ labels, data, title }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      if (chartRef.current) {
        chartRef.current.destroy(); // destroy previous chart instance
      }
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: title,
              data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [labels, data, title]);

  return (
    <div className="mt-7 w-4/5 min-h-4/5 min-w-4/5">
        <text className="text-3B3046 font-bold text-3xl flex my-2">
        ช่วงเวลาที่คนนิยมฟังเพลงมากที่สุด
        </text>
    <div className="w-full min-h-4/5 min-w-4/5">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
    </div>
  );
};

export default BarChart;
