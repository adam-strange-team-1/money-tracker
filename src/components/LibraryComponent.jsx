import React, { Component } from "react";
import _ from "lodash";
// import Loader from "./Loader/Loader";
import Table from "./table-components/Table";
import Data from "./table-components/data";
import DetailRowView from "./table-components/DetailRowView";

import './styles/LibraryComponent.css'

class LibraryComponent extends Component {
  state = {
    isLoading: true,
    data: [],
    sort: "asc", // 'desc'
    sortField: "id",
    row: null,
  };
  async componentDidMount() {
    const data = await Data;
    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort),
    });
  }
  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === "asc" ? "desc" : "asc";
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
      <div className='library-body'>
        <h2>Library</h2>
        <div className="table-wrapper">
          <div className="table-nav">
            <button className="table-btn active ">
              Outcome
            </button>
            <button className="table-btn">
              Income
            </button>
          </div>
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
        </div>
        
      </div>
      
    );
  }
}

export default LibraryComponent;

