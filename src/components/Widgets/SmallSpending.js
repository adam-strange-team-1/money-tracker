import React from "react";
import { SVG, WidgetWrapper, Text } from "./WidgetsStyle";
import { Flex } from "../common/StyledComponents";
import AllExpense from "../common/AllExpense";

export default function SmallSpending() {
  return (
    <WidgetWrapper background="white">
      <Flex margin="0 0 0 -25%" justify="start" align="center" height="auto" width="auto">
        <SVG
          className="icon-spending"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle-spending"
            cx="28"
            cy="28"
            r="28"
            fill="#F4F7FE"
          />
          <path
            d="M41.6312 24.0399H35.0766L29.083 15.0631C28.823 14.68 28.3851 14.4884 27.9472 14.4884C27.5093 14.4884 27.0714 14.68 26.8114 15.0768L20.8178 24.0399H14.2632C13.5106 24.0399 12.8948 24.6556 12.8948 25.4083C12.8948 25.5314 12.9085 25.6546 12.9495 25.7777L16.4253 38.4628C16.74 39.6123 17.7937 40.4607 19.0526 40.4607H36.8418C38.1008 40.4607 39.1544 39.6123 39.4828 38.4628L42.9586 25.7777L42.9996 25.4083C42.9996 24.6556 42.3839 24.0399 41.6312 24.0399ZM27.9472 18.2926L31.7787 24.0399H24.1157L27.9472 18.2926ZM36.8418 37.7239L19.0663 37.7376L16.0558 26.7767H39.8523L36.8418 37.7239ZM27.9472 29.5135C26.442 29.5135 25.2104 30.745 25.2104 32.2503C25.2104 33.7555 26.442 34.9871 27.9472 34.9871C29.4524 34.9871 30.684 33.7555 30.684 32.2503C30.684 30.745 29.4524 29.5135 27.9472 29.5135Z"
            fill="#7D6DC5"
          />
        </SVG>
        <Flex direction="column" margin="20px">
          <Text color="#A3AED0" weight="normal">
            All Spendings
          </Text>
          <Text color="#323765" size="24px">
            ${AllExpense().toLocaleString("eu-US")}
          </Text>
        </Flex>
      </Flex>
    </WidgetWrapper>
  );
}
