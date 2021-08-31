import React from "react";
import { SettingsForms, Input, Button, SettingWrapper } from "./SettingsStyleComp";
import { Flex, Text, TitleStyled, Img } from "../common/StyledComponents";

export default function Settings() {
  const [inputName, setInputName] = React.useState("");
  const [inputSurname, setInputSurname] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputFoto, setInputFoto] = React.useState("");

  const getName = (e) => {
    return setInputName(e.target.value);
  };

  const getSurname = (e) => {
    return setInputSurname(e.target.value);
  };

  const getEmail = (e) => {
    return setInputEmail(e.target.value);
  };

  const getFoto = (e) => {
    return setInputFoto(e.target.value);
  };

  const saveDataUser = () => {
    localStorage.setItem("name", inputName);
    localStorage.setItem("surname", inputSurname);
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("foto", inputFoto);
  };

  return (
    <SettingWrapper>
      <TitleStyled>Settings</TitleStyled>
      <SettingsForms>
        <Flex direction="column">
          <Flex justify="space-around" align="center" width="100%">
            <Flex direction="column">
              <Text font-size="30px">Profile</Text>
              <Text weight="300" font-size="18px" color="rgba(0, 0, 34, 0.5)">
                Name, Surname, Email address, URL Address photo
              </Text>
            </Flex>
            <Img src={inputFoto} width="50px" height="50px" alt="user photo" />
          </Flex>
          <Flex direction="column" width="auto">
            <Input
              type="text"
              placeholder="Name*"
              value={inputName}
              onChange={getName}
            ></Input>
            <Input
              type="text"
              placeholder="Surname*"
              value={inputSurname}
              onChange={getSurname}
            ></Input>
            <Input
              type="e-mail"
              placeholder="Email Address *"
              value={inputEmail}
              onChange={getEmail}
            ></Input>
            <Input
              type="url"
              placeholder="URL Address photo *"
              value={inputFoto}
              onChange={getFoto}
            />
          </Flex>
          <Flex justify="flex-end" style={{margin: "7px 0"}}>
            <Button onClick={saveDataUser}>Save</Button>
          </Flex>
        </Flex>
      </SettingsForms>
    </SettingWrapper>
  );
}
