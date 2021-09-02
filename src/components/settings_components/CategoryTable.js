import React, { useState } from "react";
import { Flex } from "../common/StyledComponents";
import "../../App.css";
import OutcomeCategory from "../common/OutcomeCategory";

export default function CategoryTable(props) {
  // const [category, setNewArr] = useState(props.arr)
  const [newCategory, setCategory] = useState(" ");
  return (
    <Flex background="#E5E5E5" direction="column">
      <table>
        <tbody>
          {props.arr.map((el) => (
            <tr>{el}</tr>
          ))}
          <tr>
            <button
              onClick={() => {
                document
                  .getElementById("category")
                  .classList.remove("form-disable");
              }}
            >
              Add new
            </button>
          </tr>
        </tbody>
      </table>
      <form
        id="category"
        className="form-disable"
        onSubmit={() => {
          // setCategory(document.getElementById("input").value);
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
        <input type="submit" value="Add" />
      </form>
    </Flex>
  );
}
