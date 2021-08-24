import React from "react";
import { Flex, InfoBlocks } from "./ActivityStyled";
import BarChart from "./BarChart";
import PieChart from "./Radial";

export default function Activity() {
  return (
    <Flex>
      <InfoBlocks width="456px" height="350px" padding="10px 10px 20px">
        <PieChart />
      </InfoBlocks>
      <InfoBlocks width="270px" height="345px" padding="10px 10px 20px">
        <BarChart />
      </InfoBlocks>
    </Flex>
  );
}
