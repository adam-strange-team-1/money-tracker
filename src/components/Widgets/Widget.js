import React from "react";
import SmallActivity from "./SmallActivity";
import SmallSpending from "./SmallSpending";
import SmallChart from "./SmallChart";
import SmallEarnings from "./SmallEarnings";
import LargeInput from "./LargeInput";
import { WidgetsWrapper } from "./WidgetsStyle";

export default function Widgets() {
  return (
    <WidgetsWrapper
    >
      <SmallActivity />
      <SmallSpending />
      <SmallChart />
      <SmallEarnings />
    </WidgetsWrapper>
  );
}
 