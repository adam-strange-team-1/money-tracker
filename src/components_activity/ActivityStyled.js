import styled from "styled-components";
import { StyledFlex } from "../components/common/StyledComponents";

export const ActivityWrapper = styled(StyledFlex)`
  flex-direction: column;
  margin: 65px 0 0 20vw;
  width: 55vw;
  align-items: start;
  height: max-content;
  @media (max-width: 1200px) {
    margin-left: 15vw;
  }
  @media (max-width: 860px) {
    width: 100%;
    margin-right: 30px;
  }
  @media (max-width: 650px) {
    margin-left: 30px;
    margin-top: 85px;
  }
`;

export const InfoBlockWrapper = styled(StyledFlex)`
  margin: 0;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: white;
    border-radius: 20px;
    height: 100%;
  }
`;

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
