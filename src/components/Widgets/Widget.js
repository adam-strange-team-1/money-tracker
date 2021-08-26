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
      height="100vh"
      direction="column"
      justify="space-between"
      align="center"
    >
      <SmallActivity />
      <SmallSpending />
      <SmallChart />
      <SmallEarnings />
    </Flex>
  );
}
