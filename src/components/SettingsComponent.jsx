import React from "react";
import {
  Header,
  SettingsForms,
  Form,
  ProfileFormHeder,
  ProfileText,
  FormTextHeader,
  FormText,
  ProfileFoto,
  Img,
  InputsBlock,
  Input,
  Button,
} from "./SettingsStyleComp";
import { Flex } from "./Widgets/WidgetsStyle";

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
    let dataUser = {
      name: inputName,
      surname: inputSurname,
      email: inputEmail,
      foto: inputFoto,
    };
    console.log(dataUser);
  };

  return (
    <Flex direction="column" margin="0 0 0 20vw" width="100%" align="center">
      <Header>Settings</Header>
      <SettingsForms>
        <Form>
          <ProfileFormHeder>
            <ProfileText>
              <FormTextHeader>Profile</FormTextHeader>
              <FormText>
                Name, Surname, Email address, URL Address foto
              </FormText>
            </ProfileText>
            <ProfileFoto>
              <Img src={inputFoto} alt="user foto" />
            </ProfileFoto>
          </ProfileFormHeder>
          <InputsBlock>
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
              placeholder="URL Address foto *"
              value={inputFoto}
              onChange={getFoto}
            />
          </InputsBlock>
          <Button onClick={saveDataUser}>Save</Button>
        </Form>

        <Form></Form>
      </SettingsForms>
    </Flex>
  );
}
