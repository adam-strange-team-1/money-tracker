import React, { Component } from 'react';
import { TableStyled, Td, Tr } from './LibraryStyled';

class Table extends Component {
  render() {
    const items = this.props.items;
    // const props = this.props
    return (
      <div id="Table">
        <TableStyled className="table table-striped">
          <thead>
            <Tr>
              <th>Category</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </Tr>
          </thead>
          <tbody>
            {items.map(item => {
              return (
                <Tr>
                  <Td>{item.category}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.amount}</Td>
                </Tr>
              );
            })}
          </tbody>
        </TableStyled>
      </div>
    );
  }
}

export default Table;