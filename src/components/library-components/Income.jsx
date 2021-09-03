import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import DataIncome from "../common/Income";
import IncomeCategory from "../common/IncomeCategory";
import moment from "moment";

let DataIn = [];
DataIncome.map((el) => DataIn.push({ ...el }));
DataIn.map((el) => (el.date = `${el.date.day} ${el.date.month}`));

class Income extends Component {
  constructor() {
    super();

    this.state = {
      date: "",
      category: "",
      description: "",
      amount: "",
      items: DataIn,
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    DataIncome.push({
      date: {
        day: moment(this.state.date).format("D"),
        month: moment(this.state.date).format("MMM"),
        year: moment(this.state.date).format("YYYY"),
      },
      category: this.state.category,
      category: this.state.category,
      description: this.state.description,
      amount: Number(this.state.amount),
    });
    items.push({
      date: moment(this.state.date).format("D MMM"),
      category: this.state.category,
      description: this.state.description,
      amount: Number(this.state.amount),
    });

    this.setState({
      items,
      description: "",
      amount: "",
      category: "",
      date: "",
    });
  };

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleDate = (startDate) => {
    this.setState({
      date: startDate,
    });
  };

  render() {
    return (
      <div>
        <Table items={this.state.items} />
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newCategory={this.state.category}
          newDate={this.state.date}
          handleDate={this.handleDate}
          newDescription={this.state.description}
          newAmount={this.state.amount}
          categoryArr={IncomeCategory}
        />
      </div>
    );
  }
}

export default Income;
