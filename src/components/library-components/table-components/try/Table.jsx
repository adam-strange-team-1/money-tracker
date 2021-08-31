import React, { Component } from 'react';

class Table extends Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Category</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
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