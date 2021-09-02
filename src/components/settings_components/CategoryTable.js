import React, { useState } from "react";
import { Flex, Text } from "../common/StyledComponents";
import Icons from "../common/CategoryIcon";
import "../../App.css";

export default function CategoryTable(props) {
  const [newCategory, setCategory] = useState(" ");
  return (
    <Flex background="#E5E5E5" direction="column" height="max-content">
      {props.arr.map((el) => (
        <Flex align="center" height="90px" width="100%" margin="0 0 0 20px">
          <Flex width="50px" align="center" margin="0 10px">
            {Icons.map((ico) => {
              if (ico.title === el) {
                return ico.icon;
                {
                  /* } else {
              return (
                <svg
                  width="43"
                  height="42"
                  viewBox="0 0 43 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="21.0854"
                    cy="21"
                    rx="21.0854"
                    ry="21"
                    fill="#F4F7FE"
                  />
                </svg>
              ); */
                }
              }
            })}
          </Flex>
          <Text>{el}</Text>
        </Flex>
      ))}
      <Flex align="center" height="90px" width="100%" margin="0 0 0 20px">
        <Flex width="50px" align="center" margin="0 10px">
          <svg
            onClick={() => {
              document
                .getElementById("category")
                .classList.remove("form-disable");
            }}
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="21.0854" cy="21" rx="21.0854" ry="21" fill="#F4F7FE" />
            <path
              d="M13.68 22.92V19.71H19.32V14.52H22.59V19.71H28.2V22.92H22.59V28.11H19.32V22.92H13.68Z"
              fill="black"
            />
          </svg>
        </Flex>
        <Text>Add new</Text>
      </Flex>
      <form
        id="category"
        className="form-disable"
        onSubmit={() => {
          setCategory(props.arr.push(newCategory));
          setCategory("");
          document.getElementById("category").classList.add("form-disable");
        }}
      >
        <input
          id="input"
          type="text"
          placeholder="New Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={newCategory}
        />
        <input id="submit" type="submit" value="Add" />
      </form>
    </Flex>
  );
}
