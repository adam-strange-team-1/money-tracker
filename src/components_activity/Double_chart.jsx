import React from "react";
import { Line } from "react-chartjs-2";
import { Flex, Text } from "../components/common/StyledComponents";
const expens = [
  {
    date: {
      day: "5",
      month: "Jul",
      year: "2021",
    },
    category: "Home",
    amount: 500,
    description: "Rent",
  },
  {
    date: {
      day: "5",
      month: "Aug",
      year: "2021",
    },
    category: "Home",
    amount: 500,
    description: "Rent",
  },
  {
    date: {
      day: "11",
      month: "Jul",
      year: "2021",
    },
    category: "Food",
    amount: 10,
    description: "Silpo",
  },
  {
    date: {
      day: "21",
      month: "Jul",
      year: "2021",
    },
    category: "Food",
    amount: 20,
    description: "Aushan",
  },
  {
    date: {
      day: "2",
      month: "Aug",
      year: "2021",
    },
    category: "Food",
    amount: 15,
    description: "Silpo",
  },
  {
    date: {
      day: "9",
      month: "Aug",
      year: "2021",
    },
    category: "Food",
    amount: 5,
    description: "Silpo",
  },
  {
    date: {
      day: "5",
      month: "Jul",
      year: "2021",
    },
    category: "Transportation",
    amount: 0.5,
    description: "Bus",
  },
  {
    date: {
      day: "12",
      month: "Jul",
      year: "2021",
    },
    category: "Transportation",
    amount: 0.5,
    description: "Bus",
  },
  // {
  //     date: {
  //         day: "",
  //         month: "",
  //         year: ""
  //     },
  //     category: "",
  //     amount: ,
  //     description: ""
  // }
];
// Відсортований масив
function getOutput() {
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
  const sortDay = expens
    .map((el) => el.date.day)
    .sort(function (a, b) {
      return a - b;
    });
  const sortMonth = [...new Set(expens.map((el) => el.date.month))].sort(
    function (a, b) {
      return monthArr[a[0]] - monthArr[b[0]];
    }
  );
  let arr = [];
  for (let m = 0; m < sortMonth.length; m++) {
    for (let d = 0; d < expens.length; d++) {
      for (let i = 0; i < expens.length; i++) {
        if (
          expens[i].date.month === sortMonth[m] &&
          expens[i].date.day === sortDay[d]
        ) {
          arr = arr.concat([expens[i]]);
        }
      }
    }
  }

  //   const output = labels.map((el) =>

  const sortArr = [...new Set(arr)];

//   const label = [];

  let size = sortArr.length
  for (let i = 0; i < size; i++) {
    //for (let a = i + 1; a < sortArr.length - 1; i++) {
      while (
        (i+1 < size) && 
        sortArr[i].date.day === sortArr[i+1].date.day &&
        sortArr[i].date.month === sortArr[i+1].date.month &&
        sortArr[i].date.year === sortArr[i+1].date.year
      ) {
        sortArr[i].amount += sortArr[i+1].amount;
        sortArr.splice(i+1, 1);
      }
      size = sortArr.length
    //}
  }
  console.log(sortArr);
  return sortArr;
}

const output = getOutput();
const data = {
  labels: output.map((el) => `${el.date.day} ${el.date.month}`),
  datasets: [
    {
      label: "Outcome",
      data: [12, 19, 1],
      backgroundColor: "#4318FF",
      borderRadius: 60,
      maxBarThickness: 30,
      minBarLength: 30,
      borderSkipped: true,
    },
    {
      label: "Income",
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
      display: true,
      beginAtZero: true,
    },
    x: {
      stacked: false,
      grid: {
        display: true,
        drawBorder: true,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: true,
    },
  },
};

const DoubleChart = () => (
  <Flex height="70%" width="90%" direction="column" align="center" justify="center" margin="10px">
    <Flex margin="50px">
    <Flex  background="white" direction="column" align="start">
    <Text weight="400" fontSize="14px" color="#A3AED0">
      Income this month
    </Text>
    <Text lineHeight="42px" fontSize="34px" color="#1B2559">
      $682.5
    </Text>
    </Flex>
    <Flex background="white" direction="column" align="start">
    <Text weight="400" fontSize="14px" color="#A3AED0">
      Outcome this month
    </Text>
    <Text lineHeight="42px" fontSize="34px" color="#1B2559">
      $682.5
    </Text>
    </Flex>
    </Flex>

    <Line data={data} options={options}/>
  </Flex>
);

export default DoubleChart;
