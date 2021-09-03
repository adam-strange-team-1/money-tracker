import React, { Component } from "react";
import OutcomeCategory from "../common/OutcomeCategory";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";

class Form extends Component {
  render() {
    return (
      <div className="form-container" id="Form">
        <h3>Add a new item:</h3>
        <form onSubmit={this.props.handleFormSubmit}>
          <select
            className="form-select"
            name="category"
            value={this.props.category}
            onChange={this.props.handleInputChange}
          >
            <option defaultValue>Choose category</option>
            {this.props.categoryArr.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>

          <DatePicker
            className="datepicker"
            name="date"
            placeholderText="Choose date"
            dateFormat="d MMM yyyy"
            selected={this.props.newDate}
            onChange={this.props.handleDate}
          />

          <div>
            <input
              className="form-control"
              id="description"
              value={this.props.newDescription}
              type="text"
              name="description"
              onChange={this.props.handleInputChange}
              placeholder="Description"
            />
          </div>

          <div>
            <input
              className="form-control"
              id="amount"
              value={this.props.newAmount}
              type="number"
              min="0"
              name="amount"
              onChange={this.props.handleInputChange}
              placeholder="Amount"
            />
          </div>

          <button
            className="btn btn-outline-secondary purple"
            type="submit"
            value="Submit"
          >
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
