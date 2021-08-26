import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  width: 132px;
  height: 42px;
  left: 318px;
  top: 65px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #635992;
`;
export const SettingsForms = styled.div`
  width: 80%;
  background-color: #fff;
  border-radius: 20px;
  margin: 152px 0 0 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Form = styled.div`
  width: 95%;
`;

export const ProfileFormHeder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormTextHeader = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: #635992;
`;

export const FormText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #000022;
  opacity: 0.5;
`;

export const ProfileFoto = styled.div`
  width: 50px;
  height: 50px;
  background: #e5e5e5;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
`;

export const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 40.45px;
  background: #e5e5e5;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 7px 0;
  padding: 0 34.89px;
  font-family: Lato;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  color: #000022;
`;

export const Button = styled.button`
  width: 147.31px;
  height: 40px;
  margin: 10px 0 10px calc(100% - 147.31px);
  background: #635992;
  border-radius: 5px;
  border: none;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  cursor: pointer;
`;