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
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "355px"};
  height: ${(props) => props.height || "110px"};
  background: ${(props) => props.background || "#8083B9"};
  padding: ${(props) => props.padding || "0"};
  border-radius: 20px;
`;

export const WidgetWrapper = (props) => {
  return <WidgetWrapperStyled {...props} />;
};

const SVGStyled = styled.svg`
  width: ${(props) => props.width || "355px"};
  height: ${(props) => props.height || "110px"};
`;

export const SVG = (props) => {
  return <SVGStyled {...props} />;
};

const TextStyled = styled.div`
  color: ${(props) => props.color || "#E9EDF7"};
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "bold"};
`;

export const Text = (props) => {
  return <TextStyled {...props} />;
};
