import React from "react";

export default function SmallChart() {
    return (
        <div className="small_chart">
            <p className="text-chart">
                Spent this month
            </p>
            <p className="cash-chart">
                $682.50
            </p>
            <svg className="bar-3" width="8" height="53" viewBox="0 0 8 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="icon-rectangle-18" x="0.451721" y="52.0283" width="51.6778" height="7.37125" rx="3.68563" transform="rotate(-90 0.451721 52.0283)" fill="#E9EDF7"/>
                <rect className="icon-rectangle-17" x="0.451721" y="52.0283" width="42.5348" height="7.37129" rx="3.68564" transform="rotate(-90 0.451721 52.0283)" fill="#7D6DC5"/>
            </svg>
        </div>


    )
}