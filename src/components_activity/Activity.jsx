import React from "react";
import { ActivityWrapper, InfoBlocks, InfoBlockWrapper } from "./ActivityStyled";
import BarChart from "./BarChart";
import PieChart from "./Radial";
import { Flex, Text, TitleStyled } from "../components/common/StyledComponents";
import DoubleChart from "./Double_chart";

export default function Activity() {
  return (
    <ActivityWrapper
    >
      <TitleStyled>Activity</TitleStyled>
      <InfoBlockWrapper>
        <InfoBlocks width="60%" max-height="300px" padding="10px 10px 20px">
          <PieChart />
        </InfoBlocks>
        <InfoBlocks width="30%" max-height="300px" padding="10px 10px 20px">
          <BarChart />
        </InfoBlocks>
      </InfoBlockWrapper>
      <InfoBlockWrapper>
      <InfoBlocks width="100%" height="500px" padding="10px 10px 20px" margin = "30px 0">
          <DoubleChart />
        </InfoBlocks>
      </InfoBlockWrapper>
    </ActivityWrapper>
  );
}
