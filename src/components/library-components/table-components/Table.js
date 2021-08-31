import React from "react";

function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, "category")}>
            Category
            {props.sortField === "category" ? <span> {props.sort}</span> : null}
          </th>
          <th onClick={props.onSort.bind(null, "date")}>
            Date {props.sortField === "date" ? <span>{props.sort}</span> : null}
          </th>
          <th onClick={props.onSort.bind(null, "description")}>
            Description
            {props.sortField === "description" ? (
              <span> {props.sort}</span>
            ) : null}
          </th>
          <th onClick={props.onSort.bind(null, "amount")}>
            Amount
            {props.sortField === "amount" ? <span> {props.sort}</span> : null}
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

