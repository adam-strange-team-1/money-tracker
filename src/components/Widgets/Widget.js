import React from "react";
import SmallActivity from "./components/Widgets/SmallActivity";
import SmallSpending from "./components/Widgets/SmallSpending";
import SmallChart from "./components/Widgets/SmallChart";
import SmallEarnings from "./components/Widgets/SmallEarnings";
import LargeInput from "./components/Widgets/LargeInput";
import "../Widgets/style";


function Widget() {
    return (
      <div className="Widget-1">
        <SmallActivity />
        <SmallSpending />
        <SmallChart />
        <SmallEarnings />
        <LargeInput />

       </div>
    );
  }

  export default Widget;



