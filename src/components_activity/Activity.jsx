import React from "react";
import { InfoBlocks } from "./ActivityStyled";
import BarChart from "./BarChart";
import PieChart from "./Radial";
import { Flex, Text, TitleStyled } from "../components/common/StyledComponents";

export default function Activity() {
  return (
    <Flex
      direction="column"
      margin="60px 0 0 20vw"
      width="55vw"
      align="start"
      height="100%"
    >
      <TitleStyled>Activity</TitleStyled>
      <Flex margin="0 0 0 0" direction="row" justify="space-between">
        <InfoBlocks width="456px" height="350px" padding="10px 10px 20px">
          <PieChart />
        </InfoBlocks>
        <InfoBlocks width="270px" height="345px" padding="10px 10px 20px">
          <BarChart />
        </InfoBlocks>
      </Flex>
    </Flex>
  );
}
