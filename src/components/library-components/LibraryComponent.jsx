import React, { useState } from "react";

import Income from "./Income";
import Outlay from "./Outlay";

import "./styles/LibraryComponent.css";
import { LibraryWrapper } from "./LibraryStyled";
import { TitleStyled, Text } from "../common/StyledComponents";

function LibraryComponent() {
  const [table, setTable] = useState(<Outlay />);
  
  const handleClick = () => {
    const displayElem = document.getElementById("Form");
    displayElem.classList.toggle('display-flex')
  }
  
  return (
    <LibraryWrapper className="library-body">
      <TitleStyled>Library</TitleStyled>
      <div className="table-wrapper">
        <div className="table-nav">
          <button
            className="table-btn active"
            id="btn1"
            onClick={() => {
              setTable(<Outlay />);
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
              setTable(<Income />);
              document.querySelector("#btn2").classList.add("active");
              document.querySelector("#btn1").classList.remove("active");
            }}
          >
            <Text color= "inherit">Income</Text>
          </button>
        </div>
        {table}
        
      </div>
      <button className='button-more'
        onClick={() => handleClick()}>More</button>
    </LibraryWrapper>
  );
}
export default LibraryComponent;
