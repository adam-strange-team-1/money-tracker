import React, { Component } from 'react';

class Table extends Component {
  render() {
    const items = this.props.items;
    // const props = this.props
    return (
      <div id="Table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;