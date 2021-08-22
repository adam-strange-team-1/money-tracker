import styled from "styled-components";

export const SideBar = styled.div`
  width: 290px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  width: 229px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: #635992;
`;

export const LogoText = styled.div`
  margin-left: 12px;
  width: 96px;
  height: 39px;
  flex-direction: column;
  display: flex;
`;

export const LogoTextTop = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 100%;
`;

export const LogoTextBottom = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
`;

export const LogoLineBottom = styled.div`
  width: 100%;
  border: 1px solid #f4f7fe;
`;

export const SideBarInner = styled.div`
  width: 214px;
  height: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideBarInnerTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 220px;
`;

export const SideBarBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Icon = styled.path`
  fill: #a3aed0;
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  width: 214px;
  height: 45px;
  border-radius: 4px;
  text-decoration: none;
  padding-left: 15px;
  color: #a3aed0;
  &:hover {
    ${Icon} {
      fill: #fff;
      transition: all 0.5s ease;
    }
    background-color: #635992;
    color: #fff;
    transition: all 0.5s ease;
  }
`;

export const FrameText = styled.span`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  margin-left: 10px;
`;
