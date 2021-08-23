import styled from "styled-components";

const StyledFlex = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;500&display=swap");
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
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
  margin: 0;
`;

const InfoBlockStyled = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: ${(props) => props.width || "350px"};
  height: ${(props) => props.height || "350px"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
`;

export const InfoBlocks = (props) => {
  return <InfoBlockStyled {...props} />;
};

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
  line-height:${(props) => props.lineHeight || "28px"};
  letter-spacing: -0.02em;
  color: ${(props) => props.color || "#323765"};
  margin: 0;
`;

export const Text = (props) => {
  return <TextStyled {...props} />;
};
