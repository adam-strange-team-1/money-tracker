import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};

const WidgetWrapperStyled = styled.div`
  font-family: "Work Sans", sans-serif;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: "295px";
  width: ${(props) => props.width || "22vw"};
  height: ${(props) => props.height || "14vh"};
  background: ${(props) => props.background || "#8083B9"};
  padding: ${(props) => props.padding || "0"};
  border-radius: 20px;
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
