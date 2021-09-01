import styled from "styled-components";
import { StyledFlex } from "../common/StyledComponents";

export const LibraryWrapper = styled(StyledFlex)`
  flex-direction: column;
  margin: 65px 0 0 20vw;
  width: 55vw;
  align-items: start;
  height: 100%;
  @media (max-width: 1200px) {
    margin-left: 15vw;
  }
  @media (max-width: 860px) {
    width: 100%;
    margin-right: 30px;
  }
  @media (max-width: 650px) {
    margin-left: 30px;
    margin-top: 80px;
  }
`;

export const TableStyled = styled.table `
width:100%;
font-family: "Work Sans", sans-serif;
`
export const Tr = styled.tr `
height:72px;
margin: 0;
color: white;
`

export const Td = styled.td `
color: black;
text-align: center;
`