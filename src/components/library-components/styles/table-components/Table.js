import React from "react";

function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, "category")}>
            Category
            {props === "category" ? <span> {props.sort}</span> : null}
          </th>
          <th onClick={props.onSort.bind(null, "date")}>
            Date {props === "date" ? <span>{props.sort}</span> : null}
          </th>
          <th onClick={props.onSort.bind(null, "description")}>
            Description
            {props === "description" ? (
              <span> {props.sort}</span>
            ) : null}
          </th>
          <th onClick={props.onSort.bind(null, "amount")}>
            Amount
            {props === "amount" ? <span> {props.sort}</span> : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.id} onClick={props.onRowSelect.bind(null, item)}>
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;

/* export default (props) => (
  <table className="table">
    <thead>
      <tr>
        <th onClick={props.onSort.bind(null, "date")}>
          Date {props.sortField === "date" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "amount")}>
          Amount
          {props.sortField === "amount" ? <small> {props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "description")}>
          Description
          {props.sortField === "description" ? (
            <small> {props.sort}</small>
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, "category")}>
          Category
          {props.sortField === "category" ? <small> {props.sort}</small> : null}
        </th>
      </tr>
    </thead>
    <tbody>
      {props.data.map((item) => (
        <tr key={item.id} onClick={props.onRowSelect.bind(null, item)}>
          <td>{item.date}</td>
          <td>{item.amount}</td>
          <td>{item.description}</td>
          <td>{item.category}</td>
        </tr>
      ))}
    </tbody>
  </table>
); */

