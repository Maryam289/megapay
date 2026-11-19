"use client"
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import {Doughnut} from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [640, 385, 180, 123.50, 116.0],
                backgroundColor: ['#058562', '#45A88B', '#88C5AE', '#B1D7C8', '#DFEAE4']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4', 'Bank 5']
    }
  return <Doughnut data = {data}
  options={{
    cutout: '80%',
    plugins: {
        legend: {
            display: false
        }
    }
  }} />
}

export default DoughnutChart