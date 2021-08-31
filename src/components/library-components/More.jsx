/* import React, { useState } from 'react';
import DataOutlay from './table-components/dataOutlay';
import Example from './table-components/Datepicker';

const More = () => {
  const [newItem, setNewItem] = useState([]);
  const [newListItem, setNewListItem] = useState({
    'id': 4,
    'date': '',
    'amount': '',
    'description': '',
    'category': ''
  });

  const onChangeHandler = (e) => {
    // const { name, value } = e.target;
    setNewListItem(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }
  const addToList = () => {
    const newList = [ newListItem];
    newListItem.id++;
    console.log(newList);
    setNewItem(newList)
  }
  return (
    <div>
      <h3>Create new item</h3>
      <div>
        <select id='category' name="categories" value={newListItem.category} onChange={onChangeHandler}>
          <option selected>Choose category</option>
          <option value='Home'>Home</option>
          <option value='Food'>Food</option>
          <option value='Transport'>Transport</option>
        </select>
        <br />
        <textarea id='description' placeholder='Description' type="text" value={newListItem.description} onChange={onChangeHandler} />
        <br />
        <input id='amount' placeholder='Amount' type="number" min='0' value={newListItem.amount} onChange={onChangeHandler} />
        <br />
        <Example id='date' value={newListItem.date} onChange={onChangeHandler}/>
        <button onClick={addToList}>Add to list</button>
      </div>
      {<div>
        {newItem.map((listItem) => {
          return (
            <div>
              <tbody>
        <tr key={listItem.id}>
            <td>{listItem.category}</td>
            <td>{listItem.date}</td>
            <td>{listItem.description}</td>
            <td>{listItem.amount}</td>
          </tr>
      </tbody>
            </div>
          )
        })}
      </div>}
    </div>
  )
} */

import React, { Component } from 'react';
import Table from './Table';
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
    // let input = e.target;
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Table
          items={this.state.items}


          onSort={this.onSort}
          sort={this.state.sort}
          sortField={this.state.sortField}
          onRowSelect={this.onRowSelect}
          
        />
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

export default More;