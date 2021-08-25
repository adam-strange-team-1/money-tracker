import React from "react";

export default function SmallActivity() {
    return (
        <div className="small_activity">
            <h4 className="text-activity">
                Activity
            </h4>
            <h1 className="cash-activity">
                $540.50
            </h1>
            <svg className="chart-activity" width="92" height="44" viewBox="0 0 92 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 41.5C2.5 41.5 8.77975 -6.00537 24.5 16C40.2203 38.0054 46.5 36.9946 52.5 20C59.9168 -1.0075 87.258 17.0806 90 2" stroke="url(#paint0_linear)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="-1.00002" y1="46.5" x2="71.0778" y2="-16.9144" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}