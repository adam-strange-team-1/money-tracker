import React, { Component } from 'react';
import Datepicker from './table-components/Datepicker'



class Form extends Component {
  render() {
    return (
      <div className='form-container' id="Form">
        <h3>Add a new item:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>

          <select className='form-select' name='category' value={this.props.category} onChange={this.props.handleInputChange}>
            <option defaultValue >Choose category</option>
            <option value='Home'>Home</option>
            <option value='Food'>Food</option>
            <option value='Transport'>Transport</option>
          </select>

          <Datepicker className="datepicker" name='date' value={this.props.date} onChange={this.props.handleInputChange}/>


          <div>
            <input
              className="form-control"
              id="description"
              value={this.props.newDescription}
              type="text"
              name="description"
              onChange={this.props.handleInputChange}
              placeholder='Description'
            />
          </div>
          
         
          <div>
            <input
              className="form-control"
              id="amount"
              value={this.props.newAmount}
              type="number"
              name="amount"
              onChange={this.props.handleInputChange}
              placeholder='Amount'
            />
          </div>
          
          
          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default Form;