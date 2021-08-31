import React from "react";

function DetailRowView({ outcome }) {
  return (
    <div>
      <h3>Detailed info</h3>
      <p>
        Дата: <b>{outcome.date}</b>
      </p>
      <p>
        Сума:
        <b> {outcome.amount} </b>
      </p>

      <p>
        Oпис:
        <b> {outcome.description}</b>
      </p>
      <p>
        Категорія:
        <b> {outcome.category}</b>
      </p>
    </div>
  );
};
export default DetailRowView;
