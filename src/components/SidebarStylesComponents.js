import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBar = styled.div`
  width: 18vw;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    width: 10vw;
    justify-content: center;
  }
  @media (max-width: 650px) {
    width: 100vw;
    height: 5vh;
    flex-direction: row;
    align-items: center;
    padding: 20px 0;
    top: 90vh;
  }
`;

export const Logo = styled.div`
  width: 18vw;
  margin: 40px;
  margin-right: 0;
  display: flex;
  align-items: center;
  color: #7d6dc5;
  @media (max-width: 1200px) {
    width: 5vw;
    height: 5vw;
    margin: 0;
    justify-content: center;
    padding-bottom: 50%;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

export const LogoPhone = styled(Logo)`
  display: none;
  @media (max-width: 650px) {
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 0 30px;
    margin: 0 15px 20px;
    border-bottom: 1px solid #a3aed0;
  }
`;

export const LogoText = styled.div`
  margin-left: 12px;
  width: 96px;
  height: 39px;
  flex-direction: column;
  display: flex;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LogoTextPhone = styled(LogoText)`
  display: none;
  @media (max-width: 650px) {
    display: block;
    position: absolute;
    z-index: 1;
    top: 20px;
    left: 40px;
  }
`;

export const LogoTextTop = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 100%;
  @media (max-width: 650px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const LogoTextBottom = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  @media (max-width: 650px) {
    font-size: 10px;
    line-height: 5px;
  }
`;

export const LogoLineBottom = styled.div`
  width: 100%;
  border: 1px solid #f4f7fe;
  @media (max-width: 650px) {
    display: none;
    width: 1px;
    height: 100%;
  }
`;

export const SideBarInner = styled.div`
  width: 18vw;
  height: 75%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 5vw;
  }
  @media (max-width: 650px) {
    width: 100%;
    height: 100%;
    margin: 0;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const SideBarInnerTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  @media (max-width: 1200px) {
    height: 75%;
  }
  @media (max-width: 650px) {
    flex-direction: row;
    width: 75%;
    height: 100%;
  }
`;

export const SideBarBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1200px) {
    height: 30%;
  }
  @media (max-width: 650px) {
    flex-direction: row;
    width: 25%;
    height: 100%;
  }
`;

export const Icon = styled.path`
  fill: #a3aed0;
`;

export const Nav = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 80%;
  height: 45px;
  border-radius: 5px;
  text-decoration: none;
  padding-left: 30px;
  color: #a3aed0;
  @media (max-width: 1200px) {
    justify-content: center;
    padding-left: 0;
  }

  &:hover {
    ${Icon} {
      fill: #7d6dc5;
      transition: all 0.5s ease;
    }
    color: #7d6dc5;
    transition: all 0.5s ease;
  }
  &.active {
    background-color: #7d6dc5;
    color: #fff;
  }
  &.active ${Icon} {
    fill: #fff;
  }
`;

export const NavText = styled.span`
  font-family: "Work Sans", sans-serif;
  font-weight: bold;
  margin-left: 8px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
