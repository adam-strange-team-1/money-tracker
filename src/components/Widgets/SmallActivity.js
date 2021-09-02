import React from "react";
import { SVG, Text, WidgetWrapper } from "./WidgetsStyle";
import { Flex } from "../common/StyledComponents";

export default function SmallActivity() {
  return (
    <WidgetWrapper>
      <Flex margin="10px" justify="center" align="center" height="auto" width="auto">
        <Flex width="50%" direction="column">
          <Text weight="normal">Activity</Text>
          <Text size="24px">$540.50</Text>
        </Flex>
        <Flex width="30%" justify="center" align="center">
          <SVG
            width="100%"
            height="100%"
            viewBox="0 0 92 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 41.5C2.5 41.5 8.77975 -6.00537 24.5 16C40.2203 38.0054 46.5 36.9946 52.5 20C59.9168 -1.0075 87.258 17.0806 90 2"
              stroke="url(#paint0_linear)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="-1.00002"
                y1="46.5"
                x2="71.0778"
                y2="-16.9144"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </SVG>
        </Flex>
      </Flex>
    </WidgetWrapper>
  );
}
