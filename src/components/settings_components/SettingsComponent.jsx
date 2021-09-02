import React, { useState } from "react";
import {
  SettingsForms,
  Input,
  Button,
  SettingWrapper,
} from "./SettingsStyleComp";
import { Flex, Text, TitleStyled, Img } from "../common/StyledComponents";
import OutlayCategory from './OutlayCategory';
import IncomCategory from './IncomeCategory';

export default function Settings() {
  const [details, setDetails] = useState({
    name: "Charles",
    surname: "Robbie",
    email: "robbie@gmail.com",
    photo: "https://images.pexels.com/photos/1936801/pexels-photo-1936801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  });
  const handler = () => {
    localStorage.setItem("name", details.name);
    localStorage.setItem("surname", details.surname);
    localStorage.setItem("email", details.email);
    localStorage.setItem("photo", details.photo);
  };

  const [table, setTable] = useState(<OutlayCategory/>);

  return (
    <SettingWrapper>
      <TitleStyled>Settings</TitleStyled>
      <SettingsForms onSubmit={handler()}>
        <Flex direction="column">
          <Flex justify="space-around" align="center" width="100%">
            <Flex direction="column">
              <Text font-size="30px">Profile</Text>
              <Text weight="300" font-size="18px" color="rgba(0, 0, 34, 0.5)">
                Name, Surname, Email address, URL Address photo
              </Text>
            </Flex>
            <Img
              src={details.photo}
              width="50px"
              height="50px"
              alt="user photo"
            />
          </Flex>
          <Flex direction="column" width="auto">
            <Input
              type="text"
              placeholder="Name*"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
            ></Input>
            <Input
              type="text"
              placeholder="Surname*"
              value={details.surname}
              onChange={(e) =>
                setDetails({ ...details, surname: e.target.value })
              }
            ></Input>
            <Input
              type="e-mail"
              placeholder="Email Address *"
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            ></Input>
            <Input
              type="url"
              placeholder="URL Address photo *"
              value={details.photo}
              onChange={(e) =>
                setDetails({ ...details, photo: e.target.value })
              }
            />
          </Flex>
          <Flex justify="flex-end" style={{ margin: "7px 0" }}>
            <Button>Save</Button>
          </Flex>
        </Flex>
      </SettingsForms>

      <TitleStyled style={{margin: "50px 0 5px 0"}}>Category</TitleStyled>
      <div className="table-wrapper">
        <div className="table-nav">
          <button
            className="table-btn active"
            id="btn1"
            onClick={() => {
              setTable(<OutlayCategory/>)
              document.querySelector("#btn1").classList.add("active");
              document.querySelector("#btn2").classList.remove("active");
            }}
          >
            <Text color= "inherit">Outlay</Text>
          </button>
          <button
            className="table-btn"
            id="btn2"
            onClick={() => {
              setTable(<IncomCategory/>)
              document.querySelector("#btn2").classList.add("active");
              document.querySelector("#btn1").classList.remove("active");
            }}
          >
            <Text color= "inherit">Income</Text>
          </button>
        </div>
        <div  style={{
            backgroundColor: "#E5E5E5",
            fontFamily: "DM Sans",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "28px",
            letterSpacing: "-0.02em",
            color: "#323765",
            borderRadius: "0 0 20px 20px" 
          }}>
          {table}
        </div>
        
      </div>
      <Flex justify="flex-end" style={{ margin: "7px 0" }}>
        <Button>Save</Button>
      </Flex>
    </SettingWrapper>
  );
}
