import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import DataOutcome from "../common/Outcome";
import OutcomeCategory from "../common/OutcomeCategory";
import moment from "moment";

let DataOutlay = [];
DataOutcome.map((el) => DataOutlay.push({ ...el }));
DataOutlay.map((el) => (el.date = `${el.date.day} ${el.date.month}`));

class Outlay extends Component {
  constructor() {
    super();

    this.state = {
      date: "",
      category: "",
      description: "",
      amount: "",
      items: [...DataOutlay],
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      date: moment(this.state.date).format("D MMM"),
      category: this.state.category,
      description: this.state.description,
      amount: this.state.amount,
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
      date: startDate
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
          categoryArr={OutcomeCategory}
        />
      </div>
    );
  }
}

export default Outlay;
