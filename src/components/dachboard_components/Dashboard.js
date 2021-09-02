import React from "react";
import {
  InfoBlocks,
  DashboardWrapper,
  InfoBlockWrapper,
} from "./DashboardStyled";
import { Flex, TitleStyled, Img, Text } from "../common/StyledComponents";
import DataIncome from "../common/Income";
import DataOutcome from "../common/Outcome";
import { Link, useRouteMatch } from "react-router-dom";
import { Nav } from "../SidebarStylesComponents";

export default function Dashboard() {
  const match = useRouteMatch();
  const details = {
    name: localStorage.getItem("name"),
    surname: localStorage.getItem("surname"),
    email: localStorage.getItem("email"),
    photo: localStorage.getItem("photo"),
  };

  const outputArr = () => {
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
    const sortArr = [...new Set(arr)];

    let newArr = [];
    for (let i = sortArr.length - 1; i > sortArr.length - 4; i--) {
      newArr.push(sortArr[i]);
    }
    return newArr;
  };
  return (
    <DashboardWrapper>
      <Text fontSize="14px" lineHeight="24px" color="#707EAE">
        Hi {details.name},
      </Text>
      <TitleStyled>Welcome to MONEY tracker!</TitleStyled>
      <InfoBlockWrapper>
        <InfoBlocks padding="30px 10px 0" width="43%">
          <Flex direction="column" justify="center" align="center">
            <Img src={details.photo} alt="profile=photo" />
            <Text color="#1B2559" fontSize="24px" lineHeight="32px">
              {details.name} {details.surname}
            </Text>
            <Text
              color="#A3AED0"
              fontSize="14px"
              lineHeight="24px"
              weight="400"
            >
              New York, USA
            </Text>
            <Flex>
              <Flex direction="column" justify="center" align="center">
                <Text
                  color="#A3AED0"
                  fontSize="12px"
                  lineHeight="20px"
                  weight="normal"
                >
                  Activity
                </Text>
                <Text color="#1B2559" fontSize="24px" lineHeight="32px">
                  $2,513
                </Text>
              </Flex>
              <Flex direction="column" justify="center" align="center">
                <Text
                  color="#A3AED0"
                  fontSize="12px"
                  lineHeight="20px"
                  weight="normal"
                >
                  Expens
                </Text>
                <Text color="#1B2559" fontSize="24px" lineHeight="32px">
                  $1,186
                </Text>
              </Flex>
              <Flex direction="column" justify="center" align="center">
                <Text
                  color="#A3AED0"
                  fontSize="12px"
                  lineHeight="20px"
                  weight="normal"
                >
                  Income
                </Text>
                <Text color="#1B2559" fontSize="24px" lineHeight="32px">
                  $3,700
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </InfoBlocks>
        <InfoBlocks padding="30px 0 0 20px" width="43%">
          <Flex direction="column" align="start">
            <Text fontSize="20px" lineHeight="32px">
              Your transactions
            </Text>
            <Flex direction="column" margin="10% 0 0 0 " height="60%">
              {outputArr().map((el) => (
                <Flex align="center">
                  <Img
                    height="48px"
                    width="48px"
                    src="https://images.pexels.com/photos/6588914/pexels-photo-6588914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <Flex
                    justify="center"
                    margin="0 0 0 15px"
                    width="33%"
                    direction="column"
                    align="start"
                  >
                    <Text>{el.category}</Text>
                    <Text
                      color="#A3AED0"
                      fontSize="12px"
                      lineHeight="20px"
                      weight="normal"
                    >
                      {el.date.day} {el.date.month} {el.date.year}
                    </Text>
                  </Flex>
                  <Flex
                    width="30%"

                    justify="flex-end"
                    align="center"
                  ><Text>${el.amount}</Text></Flex>
                  
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex
            height="30px"
            justify="flex-end"
            margin="-70px 0 0 150px"
          >
            <Nav to={`${match.url}library`}>
              <Text color="#7D6DC5">View all</Text>
            </Nav>
          </Flex>
        </InfoBlocks>
      </InfoBlockWrapper>
    </DashboardWrapper>
  );
}
