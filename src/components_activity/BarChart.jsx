import React from "react";
import { Bar } from "react-chartjs-2";
import { Flex, Text } from "./ActivityStyled";

const data = {
  labels: ["Paycheck", "Bonus", "Others"],
  datasets: [
    {
      label: "Income",
      data: [12, 19, 1],
      backgroundColor: "#4318FF",
      borderRadius: 60,
      maxBarThickness: 30,
      minBarLength: 30,
      borderSkipped: true,
    },
    {
      label: "All income",
      data: [34, 34, 34],
      backgroundColor: "#E9EDF7",
      borderRadius: 60,
      maxBarThickness: 30,
      minBarLength: 30,
      borderSkipped: true,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  cornerRadius: 10,
  scales: {
    y: {
      display: false,
      beginAtZero: true,
    },
    x: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
};

const BarChart = () => (
  <Flex height="80%" direction="column" align="start">
    <Text weight="400" fontSize="14px" color="#A3AED0">
      Income this month
    </Text>
    <Text lineHeight="42px" fontSize="34px" color="#1B2559">
      $682.5
    </Text>

    <Bar data={data} options={options} />
  </Flex>
);

export default BarChart;
