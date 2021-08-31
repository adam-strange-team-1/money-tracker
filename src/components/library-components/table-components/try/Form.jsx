import React, { Component } from 'react';
import Example from '../library-components/table-components/Datepicker'

class Form extends Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new item:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>



          <select name='category' value={this.props.category} onChange={this.props.handleInputChange}>
            <option defaultValue >Choose category</option>
            <option value='Home'>Home</option>
            <option value='Food'>Food</option>
            <option value='Transport'>Transport</option>
          </select>

          <Example name='date' value={this.props.date} onChange={this.props.handleInputChange}/>


          <label htmlFor="description">
          Description:
          <input id="description" value={this.props.newDescription} 
            type="text" name="description"
            onChange={this.props.handleInputChange} />
          </label>

          
          <label htmlFor="amount">
          Amount:
          <input id="amount" value={this.props.newAmount} 
            type="amount" name="amount"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default Form;