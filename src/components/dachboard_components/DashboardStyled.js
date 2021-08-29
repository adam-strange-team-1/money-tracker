import styled from "styled-components";
import { StyledFlex } from "../common/StyledComponents";

export const DashboardWrapper = styled(StyledFlex)`
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
  margin: 30px 0 0 0;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
  }
`;

const InfoBlockStyled = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: ${(props) => props.width || "350px"};
  height: ${(props) => props.height || "350px"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  @media (max-width: 650px) {
    width: 95%;
    margin-bottom: 30px;
    padding: 10px;
  }
`;

export const InfoBlocks = (props) => {
  return <InfoBlockStyled {...props} />;
};
