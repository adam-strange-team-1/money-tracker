import styled from "styled-components";
import { StyledFlex } from "../common/StyledComponents";

export const SettingWrapper = styled(StyledFlex)`
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

export const SettingsForms = styled.div`
  width: 95%;
  padding: 2%;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  height: 40px;
  background: #e5e5e5;
  border-radius: 6px;
  border: none;
  outline: none;
  margin: 7px 0;
  padding: 0 34.89px;
  font-family: "Work Sans", sans-serif;
  letter-spacing: -0.02em;
  font-size: 18px;
  line-height: 22px;
  color: #000022;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  margin: 0;
  background: #7d6dc5;
  border-radius: 5px;
  border: none;
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  cursor: pointer;
`;
