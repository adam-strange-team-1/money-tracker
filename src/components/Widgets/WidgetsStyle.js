import React from "react";
import styled from "styled-components";
import { Flex } from "../common/StyledComponents";

export const WidgetsWrapper = styled(Flex)`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  height: 85%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 70px 15px 30px 0;
  width: auto;
`;

const WidgetWrapperStyled = styled.div`
  font-family: "Work Sans", sans-serif;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: "295px";
  width: ${(props) => props.width || "22vw"};
  height: ${(props) => props.height || "14vh"};
  max-height: 125px;
  background: ${(props) => props.background || "#8083B9"};
  padding: ${(props) => props.padding || "0"};
  border-radius: 20px;
  @media (max-width: 1200px) {
    width: 28vw;
  }
  @media (max-width: 860px) {
    display: none;
  }
`;

export const WidgetWrapper = (props) => {
  return <WidgetWrapperStyled {...props} />;
};

const SVGStyled = styled.svg`
  width: ${(props) => props.width || "22vw"};
  height: ${(props) => props.height || "14vh"};
`;

export const SVG = (props) => {
  return <SVGStyled {...props} />;
};

const TextStyled = styled.div`
  color: ${(props) => props.color || "#E9EDF7"};
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || "600"};
`;

export const Text = (props) => {
  return <TextStyled {...props} />;
};
