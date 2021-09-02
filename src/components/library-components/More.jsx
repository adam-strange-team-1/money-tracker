/* import React, { Component } from 'react';
import Form from './Form';
import DataOutlay from './table-components/dataOutlay'

class More extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      items: [...DataOutlay]
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      date: this.state.date,
      category: this.state.category,
      description: this.state.description,
      amount: this.state.amount
    });

    this.setState({
      items,
      description: '',
      amount: '',
      category: '',
      date: ''
    });
  };

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={this.handleInputChange}
          newCategory={this.state.category}
          newDate={this.state.date}
          newDescription={ this.state.description }
          newAmount={ this.state.amount } />
      </div>
    );
  }
}

export default More; */