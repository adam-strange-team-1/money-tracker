import React, { useEffect, useState } from "react";
import { Flex, Text } from "../components/common/StyledComponents";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
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
  const day = n.getDate();
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

  const output = [
    {
      category: "Home",
      color: "",
      amount: 0,
    },
    {
      category: "Transportation",
      color: "",
      amount: 0,
    },
    {
      category: "Food",
      color: "",
      amount: 0,
    },
    {
      category: "Helth/Medical",
      color: "",
      amount: 0,
    },
    {
      category: "Pets",
      color: "",
      amount: 0,
    },
    {
      category: "Entertaiment",
      color: "",
      amount: 0,
    },
  ];

  function getOutput(value) {
    const arr = expens.filter((el) => el.date.month === value);
    for (let i = 0; i < output.length; i++) {
      output[i].amount = 0;
      for (let a = 0; a < arr.length; a++) {
        if (output[i].category === arr[a].category) {
          output[i].amount += arr[a].amount;
        }
      }
    }
  }
  const [dataSample, setDataSample] = useState("monthly");

  function getData() {
    let data;
    if (dataSample === "monthly") {
      const arr = expens.filter((el) => el.date.month === monthArr[month]);
      for (let i = 0; i < output.length; i++) {
        output[i].amount = 0;
        for (let a = 0; a < arr.length; a++) {
          if (output[i].category === arr[a].category) {
            output[i].amount += arr[a].amount;
          }
        }
      }
      data = {
        labels: output
          .filter((el) => {
            if (el.amount != 0) {
              return el.category;
            }
          })
          .map((el) => el.category),
        datasets: [
          {
            data: output
              .filter((el) => {
                if (el.amount != 0) {
                  return el.category;
                }
              })
              .map((el) => el.amount),
            backgroundColor: ["#1C6CB7", "#FFCE20", "#05CD99"],
            hoverOffset: 4,
          },
        ],
      };
    } else if (dataSample === "yearly") {
      const arr = expens.filter((el) => el.date.year === "2021");
      for (let i = 0; i < output.length; i++) {
        output[i].amount = 0;
        for (let a = 0; a < arr.length; a++) {
          if (output[i].category === arr[a].category) {
            output[i].amount += arr[a].amount;
          }
        }
      }
      data = {
        labels: output
          .filter((el) => {
            if (el.amount != 0) {
              return el.category;
            }
          })
          .map((el) => el.category),
        datasets: [
          {
            data: output
              .filter((el) => {
                if (el.amount != 0) {
                  return el.category;
                }
              })
              .map((el) => el.amount),
            backgroundColor: ["#1C6CB7", "#FFCE20", "#05CD99"],
            hoverOffset: 4,
          },
        ],
      };
    } else if (dataSample === "daily") {
      const arr = expens.filter(
        (el) => el.date.day === day && el.date.month === monthArr[month]
      );
      for (let i = 0; i < output.length; i++) {
        output[i].amount = 0;
        for (let a = 0; a < arr.length; a++) {
          if (output[i].category === arr[a].category) {
            output[i].amount += arr[a].amount;
          }
        }
      }
      data = {
        labels: output
          .filter((el) => {
            if (el.amount != 0) {
              return el.category;
            }
          })
          .map((el) => el.category),
        datasets: [
          {
            data: output
              .filter((el) => {
                if (el.amount != 0) {
                  return el.category;
                }
              })
              .map((el) => el.amount),
            backgroundColor: ["#1C6CB7", "#FFCE20", "#05CD99"],
            hoverOffset: 4,
          },
        ],
      };
    }
    return data;
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#1B2559",
          boxWidth: 0,
          boxHeight: 0,
        },
      },
    },
  };

  return (
    <Flex width="80%" direction="column" align="start">
      <Flex justify="space-between">
        <Text margin="0" fontSize="24px" lineHeight="24px" color="#1B2559">
          Category
        </Text>
        <select onChange={(e) => setDataSample(e.target.value)}>
          <option value="yearly">This Year</option>
          <option selected value="monthly">
            This Month
          </option>
          <option value="daily">Today </option>
        </select>
      </Flex>
      <Pie data={getData()} options={options} />
    </Flex>
  );
};

export default PieChart;
