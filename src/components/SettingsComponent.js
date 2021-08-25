import React from "react";
import styled from "styled-components";

const Header = styled.div`
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
  color: #2b3674;
`;
const SettingsForms = styled.div`
  width: 742px;
  background-color: #fff;
  border-radius: 20px;
  margin: 152px 0 0 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.div`
  width: 693.65px;
  height: 285px;
  left: 335px;
  top: 173px;
`;

const ProfileFormHeder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormTextHeader = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: #000022;
`;

const FormText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #000022;
  opacity: 0.5;
`;

const ProfileFoto = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
`;

const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40.45px;
  background: #e5e5e5;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 7px 0;
  padding-left: 34.89px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000022;
`;

const ButtonWrapper = styled.div`
  text-align: end;
  margin: 15px 0;
`;

const Button = styled.button`
  width: 147.31px;
  height: 40px;
  background: #645992;
  border-radius: 5px;
  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  cursor: pointer;
`;

export default function Settings() {
  return (
    <div className="settings_wrapper" style={{ marginLeft: "290px" }}>
      <Header>Settings</Header>
      <SettingsForms>
        <Form>
          <ProfileFormHeder>
            <ProfileText>
              <FormTextHeader>Profile</FormTextHeader>
              <FormText>Name, Surname, Email address</FormText>
            </ProfileText>
            <ProfileFoto>
              <img
                src="https://ru.w3docs.com/build/images/bw_chrome.svg"
                alt=""
              />
            </ProfileFoto>
          </ProfileFormHeder>
          <InputsBlock>
            <Input type="text" placeholder="Name*"></Input>
            <Input type="text" placeholder="Surname*"></Input>
            <Input type="e-mail" placeholder="Email Adress *"></Input>
          </InputsBlock>
          <ButtonWrapper>
            <Button className="save">Save</Button>
          </ButtonWrapper>
        </Form>

        <Form>
          <ProfileText>
            <FormTextHeader>Category</FormTextHeader>
          </ProfileText>
          <ButtonWrapper>
            <Button className="save">Save</Button>
          </ButtonWrapper>
        </Form>
      </SettingsForms>
    </div>
  );
}
