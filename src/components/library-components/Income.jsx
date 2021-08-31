/* import React, { Component } from "react";

import _ from "lodash";
import Table from "./table-components/Table";
import DataIncome from "./table-components/dataIncome";
import DetailRowView from './table-components/DetailRowView.js'

import './styles/LibraryComponent.css'

const downArrow =(<svg className='arrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>);
const upArrow = (<svg className='arrow'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>)

class Income extends Component {
  
  state = {
    isLoading: true,
    data: [],
    sort: downArrow, // 'desc'
    sortField: "id",
    row: null,
  };

  async componentDidMount() {
    const incomeData = await DataIncome;
    this.setState({
      isLoading: false,
      data: _.orderBy(incomeData, this.state.sortField, this.state.sort),
    });
  }
  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === downArrow ? upArrow : downArrow;
    const orderedData = _.orderBy(cloneData, sortField, sortType);

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField,
    });
  };
  onRowSelect = (row) => this.setState({ row });

  
  render() {
    return (
          <div className="data-container">
            {
              <Table
                data={this.state.data}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
              />
        }
        {this.state.row ? <DetailRowView outcome={this.state.row} /> : null}
          </div>
    );
  }
}

export default Income;

 */

/* import React, { Component } from "react";

import _ from "lodash";
import Table from "./table-components/Table";
import DataOutlay from './table-components/dataOutlay'
import DetailRowView from './table-components/DetailRowView.js'

import './styles/LibraryComponent.css'

const downArrow =(<svg className='arrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>);
const upArrow = (<svg className='arrow'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>)

class Outlay extends Component {
  
  state = {
    isLoading: true,
    data: [],
    sort: downArrow, // 'desc'
    sortField: "id",
    row: null,
  };

  async componentDidMount() {
    const outlayData = await DataOutlay;
    this.setState({
      isLoading: false,
      data: _.orderBy(outlayData, this.state.sortField, this.state.sort),
    });
  }
  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === downArrow ? upArrow : downArrow;
    const orderedData = _.orderBy(cloneData, sortField, sortType);

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField,
    });
  };
  onRowSelect = (row) => this.setState({ row });

  
  render() {
    return (
          <div className="data-container">
            {
              <Table
                data={this.state.data}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
              />
        }
        {this.state.row ? <DetailRowView outcome={this.state.row} /> : null}
          </div>
      
    );
  }
}
 */

import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import DataIncome from './table-components/dataIncome';

class Income extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      items: [...DataIncome]
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
      <div>
        <Table items={ this.state.items }/>
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

export default Income;