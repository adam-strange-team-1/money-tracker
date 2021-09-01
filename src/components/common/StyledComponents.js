import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f4f7fe;
  overflow-y:scroll;
  overflow-x:hidden;
`;

 export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background: ${(props) => props.background || "100%"};
  border-radius: ${(props) => props.radius || "100%"};
  transition: ${(props) => props.height || "100%"};
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};
export const TitleStyled = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 42px;
  color: #2b3674;
  letter-spacing: -0.02em;
  margin: 0 0 50px 0;
`;

const ImgStyled = styled.img`
  width: ${(props) => props.width || "130px"};
  height: ${(props) => props.height || "130px"};
  border-radius: 100%;
  object-fit: cover;
`;
export const Img = (props) => {
  return <ImgStyled {...props} />;
};

const TextStyled = styled.p`
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.weight || "bold"};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.lineHeight || "28px"};
  letter-spacing: -0.02em;
  color: ${(props) => props.color || "#323765"};
  margin: 0;
`;

export const Text = (props) => {
  return <TextStyled {...props} />;
};
