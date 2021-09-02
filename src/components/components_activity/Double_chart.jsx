import { concat } from "lodash";
import React from "react";
import { Line } from "react-chartjs-2";
import { Flex, Text } from "../common/StyledComponents";
import DataIncome from "../common/Income";
import DataOutcome from "../common/Outcome";
const n = new Date();
const month = n.getMonth();
const monthAr = [
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
let allIncome = 0;
DataIncome.map((el) => {
  if (el.date.month === monthAr[month]) {
    allIncome += el.amount;
  }
});
let allOutcome = 0;
DataOutcome.map((el) => {
  if (el.date.month === monthAr[month]) {
    allOutcome += el.amount;
  }
});

function getOutputLabels() {
  const input = [].concat(DataIncome).concat(DataOutcome);
  const inputArr = [];
  for (let i = 0; i < input.length; i++) {
    inputArr.push({ ...input[i] });
  }
  const monthArr = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  const sortDay = inputArr
    .map((el) => el.date.day)
    .sort(function (a, b) {
      return a - b;
    });
  const sortMonth = [...new Set(inputArr.map((el) => el.date.month))].sort(
    function (a, b) {
      return monthArr[a[0]] - monthArr[b[0]];
    }
  );
  let arr = [];
  for (let m = 0; m < sortMonth.length; m++) {
    for (let d = 0; d < inputArr.length; d++) {
      for (let i = 0; i < inputArr.length; i++) {
        if (
          inputArr[i].date.month === sortMonth[m] &&
          inputArr[i].date.day === sortDay[d]
        ) {
          arr = arr.concat([inputArr[i]]);
        }
      }
    }
  }

  //   const output = labels.map((el) =>

  const sortArr = [...new Set(arr)];

  //   const label = [];

  let size = sortArr.length;
  for (let i = 0; i < size; i++) {
    //for (let a = i + 1; a < sortArr.length - 1; i++) {
    while (
      i + 1 < size &&
      sortArr[i].date.day === sortArr[i + 1].date.day &&
      sortArr[i].date.month === sortArr[i + 1].date.month &&
      sortArr[i].date.year === sortArr[i + 1].date.year
    ) {
      sortArr[i].amount += sortArr[i + 1].amount;
      sortArr.splice(i + 1, 1);
      size = sortArr.length;
    }
    //}
  }
  return sortArr;
}

function getOutcomeData() {
  const outputLabels = getOutputLabels();
  const arr = [];
  for (let i = 0; i < outputLabels.length; i++) {
    arr[i] = 0;
    DataOutcome.map((el) => {
      if (
        el.date.day === outputLabels[i].date.day &&
        el.date.month === outputLabels[i].date.month
      ) {
        arr[i] += el.amount;
      }
    });
  }
  return arr;
}
function getIncomeData() {
  const outputLabels = getOutputLabels();
  const arr = [];
  for (let i = 0; i < outputLabels.length; i++) {
    arr[i] = 0;
    DataIncome.map((el) => {
      if (
        el.date.day === outputLabels[i].date.day &&
        el.date.month === outputLabels[i].date.month
      ) {
        arr[i] += el.amount;
      }
    });
  }
  return arr;
}

const outcomeData = getOutcomeData();
const incomeData = getIncomeData();
const outputLabels = getOutputLabels();
const data = {
  labels: outputLabels.map((el) => `${el.date.day} ${el.date.month}`),
  datasets: [
    {
      label: "Outcome",
      data: outcomeData,
      backgroundColor: "#4318FF",
      borderColor: "#4318FF",
      borderJoinStyle: "round",
      tension: 0.5,
      borderWidth: 5,
      pointRadius: 0,
      pointHitRadius: 5,
      pointBackgroundColor: "white",
      fill: {
        target: "origin",
        above: "rgba(67, 24, 255, 0.4)",
      },
    },
    {
      label: "Income",
      data: incomeData,
      backgroundColor: "#05CD99",
      borderColor: "#05CD99",
      borderJoinStyle: "round",
      tension: 0.5,
      borderWidth: 5,
      pointRadius: 0,
      pointHitRadius: 5,
      pointBackgroundColor: "white",
      fill: {
        target: "origin",
        above: "rgba(5, 205, 153, 0.4)",
      },
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  interaction: {
    mode: "nearest",
  },
  cornerRadius: 10,
  scales: {
    y: {
      display: true,
      beginAtZero: true,
      ticks: {
        callback: function (value, index, values) {
          return "$" + value;
        },
        stepSize: 300,
      },
    },
    x: {
      stacked: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: true,
    },
    legend: {
      display: true,
      position: "bottom",
    },
  },
};

const DoubleChart = () => (
  <Flex
    height="80%"
    width="95%"
    direction="column"
    align="center"
    justify="center"
    margin="50px 0 0 0"
  >
    <Flex width="100%" justify="space-around">
      <Flex
        height="70px"
        width="30%"
        radius="8px"
        shadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
        background="white"
        direction="column"
        align="center"
      >
        <Text weight="400" fontSize="14px" color="#A3AED0">
          Income this month
        </Text>
        <Text lineHeight="42px" fontSize="24px" color="#1B2559">
          ${allIncome}
        </Text>
      </Flex>
      <Flex
        height="70px"
        width="30%"
        radius="8px"
        shadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
        background="white"
        direction="column"
        align="center"
      >
        <Text weight="400" fontSize="14px" color="#A3AED0">
          Outcome this month
        </Text>
        <Text lineHeight="42px" fontSize="24px" color="#1B2559">
          ${allOutcome}
        </Text>
      </Flex>
    </Flex>

    <Line data={data} options={options} />
  </Flex>
);

export default DoubleChart;
