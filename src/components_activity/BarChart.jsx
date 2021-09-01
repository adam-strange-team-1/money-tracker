import React from "react";
import { Bar } from "react-chartjs-2";
import { Flex, Text } from "../components/common/StyledComponents";
import DataIncome from "./Income";
import IncomeCategory from "./IncomeCategory";

//дані про поточний місяць
const n = new Date();
const month = n.getMonth();
const monthArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// сума за цей місяць
let allData = 0;
DataIncome.map((el) => {
  if (el.date.month === monthArr[month]) {
    allData += el.amount;
  }
});

//відфільтрований масив за цей місяць
const monthOutput = DataIncome.filter(
  (el) => el.date.month === monthArr[month]
);

//суми по категоріях для графіка
let dataOutput = []; 
for (let i = 0; i < IncomeCategory.length; i++) {
  let x = monthOutput.filter((el) => el.category === IncomeCategory[i]);
  dataOutput[i] = 0;
  for (let a = 0; a < x.length; a++) {
    dataOutput[i] += x[a].amount;
  }
}
console.log(dataOutput)

// масив за цей місяць макс доходу(для сірої колонки)
let amountIncome = [];
for (let i = 0; i < dataOutput.length; i++) {
  amountIncome[i] = allData;
}

const data = {
  labels: IncomeCategory,
  datasets: [
    {
      label: "",
      data: dataOutput,
      backgroundColor: "#4318FF",
      borderRadius: 60,
      maxBarThickness: 30,
      minBarLength: 0,
      borderSkipped: true,
    },
    {
      label: "All income",
      data: amountIncome,
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
      enabled: true,
      // {filter: function(TooltipData) {
      //   if(data.datasets[0]) {
      //     return true
      //   }else return false
      // }
      // }
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
      ${allData}
    </Text>

    <Bar data={data} options={options} />
  </Flex>
);

export default BarChart;
