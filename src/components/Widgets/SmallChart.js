import React from "react";
import { SVG, Text, WidgetWrapper } from "./WidgetsStyle";
import { Flex } from "../common/StyledComponents";
import SpentMonth from "../common/SpentMonth";

export default function SmallChart() {
  return (
    <WidgetWrapper background="white">
      <Flex
        margin="20px"
        width="100%"
        justify="space-between"
        align="center"
        height="auto"
        width="auto"
      >
        <Flex direction="column">
          <Text color="#A3AED0" weight="normal">
            Spent this month
          </Text>
          <Text color="#323765" size="24px">
            ${SpentMonth().toLocaleString("eu-US")}
          </Text>
        </Flex>
        <SVG
          width="89"
          height="53"
          viewBox="0 0 89 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="80.7234"
            y="52.0283"
            width="51.6778"
            height="7.37124"
            rx="3.68562"
            transform="rotate(-90 80.7234 52.0283)"
            fill="#E9EDF7"
          />
          <rect
            x="80.7234"
            y="52.0283"
            width="12.3232"
            height="7.37124"
            rx="3.68562"
            transform="rotate(-90 80.7234 52.0283)"
            fill="#7D6DC5"
          />
          <rect
            x="60.655"
            y="52.0283"
            width="51.6779"
            height="7.37121"
            rx="3.6856"
            transform="rotate(-90 60.655 52.0283)"
            fill="#E9EDF7"
          />
          <rect
            x="60.655"
            y="52.0283"
            width="46.9076"
            height="7.3713"
            rx="3.68565"
            transform="rotate(-90 60.655 52.0283)"
            fill="#7D6DC5"
          />
          <rect
            x="40.5875"
            y="52.0283"
            width="51.6778"
            height="7.3713"
            rx="3.68565"
            transform="rotate(-90 40.5875 52.0283)"
            fill="#E9EDF7"
          />
          <rect
            x="40.5875"
            y="52.0283"
            width="35.777"
            height="7.3713"
            rx="3.68565"
            transform="rotate(-90 40.5875 52.0283)"
            fill="#7D6DC5"
          />
          <rect
            x="20.5201"
            y="52.0283"
            width="51.6778"
            height="7.37128"
            rx="3.68564"
            transform="rotate(-90 20.5201 52.0283)"
            fill="#E9EDF7"
          />
          <rect
            x="20.5201"
            y="52.0283"
            width="26.634"
            height="7.3713"
            rx="3.68565"
            transform="rotate(-90 20.5201 52.0283)"
            fill="#7D6DC5"
          />
          <rect
            x="0.451721"
            y="52.0283"
            width="51.6778"
            height="7.37125"
            rx="3.68563"
            transform="rotate(-90 0.451721 52.0283)"
            fill="#E9EDF7"
          />
          <rect
            x="0.451721"
            y="52.0283"
            width="42.5348"
            height="7.37129"
            rx="3.68564"
            transform="rotate(-90 0.451721 52.0283)"
            fill="#7D6DC5"
          />
        </SVG>
      </Flex>
    </WidgetWrapper>
  );
}
