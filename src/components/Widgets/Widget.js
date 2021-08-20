import React from "react";
import SmallActivity from "../Widgets/SmallActivity";
import SmallSpending from "../Widgets/SmallSpending";
import SmallChart from "../Widgets/SmallChart";
import SmallEarnings from "../Widgets/SmallEarnings";
import LargeInput from "../Widgets/LargeInput";
import "../Widgets/style/Widget.css";


function Widget() {
    return (
      <div className="Widgets">
        <SmallActivity />
        <SmallSpending />
        <SmallChart />
        <SmallEarnings />
        <LargeInput />
      </div>
    );
  }

  export default Widget;



