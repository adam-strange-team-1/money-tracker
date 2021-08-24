import React from "react";
import { Flex, InfoBlocks } from "./ActivityStyled";
import BarChart from "./BarChart";

export default function Activity() {
  return (
    <InfoBlocks width="270px" height="345px" padding="10px 10px 20px" height="">
      <BarChart />
    </InfoBlocks>
  );
}
