'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Plugin to add glow/shadow around dots
const shadowPlugin = {
  id: 'shadowGlow',
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    chart.data.datasets.forEach((dataset, i) => {
      chart.getDatasetMeta(i).data.forEach((point) => {
        const radius = point.options.radius || 3;
        ctx.save();
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius + 4, 0, 2 * Math.PI); // smaller glow
				ctx.fillStyle = dataset.backgroundColor + '22'; // ~13% opacity glow
        ctx.fill();
        ctx.restore();
      });
    });
  }
};

// Register chart components and plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  shadowPlugin
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
  datasets: [
    {
      label: '2024',
      data: [52, 48, 30, 31, 30, 24, 29, 31, 18, 12, 20],
      backgroundColor: '#FF7D09',
      borderColor: '#FF7D09',
      pointBackgroundColor: '#FF7D09',
      pointRadius: 3,
      pointHoverRadius: 5,
      borderWidth: 1,
      fill: true,
      tension: 0.1,
    },
    {
      label: '2025',
      data: [15, 9, 14, 25, 22, 28, 20, 30, 29, 45, 50],
      backgroundColor: '#ED0006',
      borderColor: '#ED0006',
      pointBackgroundColor: '#ED0006',
      pointRadius: 3,
      pointHoverRadius: 5,
      borderWidth: 1,
      fill: true,
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
        drawBorder: false,
      },
      ticks: {
        autoSkip: true,
        maxRotation: 0,
        minRotation: 0,
      },
    },
    y: {
      grid: {
        drawBorder: false,
        drawOnChartArea: true,
        lineWidth: 1,
      },
      ticks: {
        stepSize: 10,
      },
    },
  },
};

export default function SalesChart() {
  return (
    <div className='w-[64%] shadow-md rounded-2xl px-4 py-6'>
      <h2 className="text-2xl font-regular mb-4">Sales Analytics</h2>
      <Line className='max-w-[100%]' data={data} options={options} />
    </div>
  );
}
