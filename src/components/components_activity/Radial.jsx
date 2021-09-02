import React, { useEffect, useState } from "react";
import { Flex, Text } from "../common/StyledComponents";
import { Pie } from "react-chartjs-2";
import DataOutcome from "../common/Outcome";
import OutcomeCategory from "../common/OutcomeCategory";

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
  // Основа для виводу
  const output = OutcomeCategory.map((el) => ({
    category: el,
    color: "",
    amount: 0,
  }));

  const [dataSample, setDataSample] = useState("allPeriod");

  function getData() {
    let data;
    if (dataSample === "monthly") {
      const arr = DataOutcome.filter((el) => el.date.month === monthArr[month]);
      for (let i = 0; i < output.length; i++) {
        output[i].amount = 0;
        for (let a = 0; a < arr.length; a++) {
          if (output[i].category === arr[a].category) {
            output[i].amount += arr[a].amount;
          }
        }
      }
      data = {
        labels: output.filter((el) => el.amount != 0).map((el) => el.category),
        datasets: [
          {
            data: output.filter((el) => el.amount != 0).map((el) => el.amount),
            backgroundColor: ["#1C6CB7", "#FFCE20", "#05CD99"],
            hoverOffset: 4,
          },
        ],
      };
    } else if (dataSample === "yearly") {
      const arr = DataOutcome.filter((el) => el.date.year === "2021");
      for (let i = 0; i < output.length; i++) {
        output[i].amount = 0;
        for (let a = 0; a < arr.length; a++) {
          if (output[i].category === arr[a].category) {
            output[i].amount += arr[a].amount;
          }
        }
      }
      data = {
        labels: output.filter((el) => el.amount != 0).map((el) => el.category),
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
      const arr = DataOutcome.filter(
        (el) => el.date.day == day && el.date.month === monthArr[month]
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
        labels: output.filter((el) => el.amount != 0).map((el) => el.category),
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
    } else {
      const arr = DataOutcome;
      for (let i = 0; i < output.length; i++) {
        output[i].amount = 0;
        for (let a = 0; a < arr.length; a++) {
          if (output[i].category === arr[a].category) {
            output[i].amount += arr[a].amount;
          }
        }
      }
      data = {
        labels: output.filter((el) => el.amount != 0).map((el) => el.category),
        datasets: [
          {
            data: output
              .filter((el) => {
                if (el.amount != 0) {
                  return el.category;
                }
              })
              .map((el) => el.amount),
            backgroundColor: [
              "#05CD99",
              "#1C6CB7",
              "#7D6DC5",
              "#FFCE20",
              "red",
            ],
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
          boxWidth: 10,
          boxHeight: 10,
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
          <option selected value="allPeriod">
            All period{" "}
          </option>
          <option value="yearly">This Year</option>
          <option value="monthly">This Month</option>
          <option value="daily">Today </option>
        </select>
      </Flex>
      <Pie data={getData()} options={options} />
    </Flex>
  );
};

export default PieChart;
