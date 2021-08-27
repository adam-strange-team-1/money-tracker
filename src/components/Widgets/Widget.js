import React from "react";
import SmallActivity from "./SmallActivity";
import SmallSpending from "./SmallSpending";
import SmallChart from "./SmallChart";
import SmallEarnings from "./SmallEarnings";
import LargeInput from "./LargeInput";
import { Flex } from "./WidgetsStyle";

export default function Widgets() {
  return (
    <Flex
      max-height="100%"
      direction="column"
      justify="space-between"
      align="center"
      margin="70px 15px 30px 0"
    >
      <SmallActivity />
      <SmallSpending />
      <SmallChart />
      <SmallEarnings />
    </Flex>
  );
}
