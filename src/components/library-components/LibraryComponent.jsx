/* import React, { Component } from "react";

import _ from "lodash";
import Table from "./library-components/styles/table-components/Table";
import DataOutlay from "./library-components/styles/table-components/dataOutlay";
import DataIncome from "./library-components/styles/table-components/dataIncome";
import DetailRowView from "./library-components/styles/table-components/DetailRowView";

import './styles/LibraryComponent.css'

const downArrow =(<svg className='arrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>);
const upArrow = (<svg className='arrow'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>)

class LibraryComponent extends Component {
  
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
      <div className='library-body'>
        <h2>Library</h2>
        <div className="table-wrapper">
          <div className="table-nav">
            <button className="table-btn active ">
              Outlay
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
          </div>
          <button className='button-more'>More</button>
          <div>
            
            {this.state.row ? <DetailRowView outcome={this.state.row} /> : null}
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default LibraryComponent; */

import React, { useState } from "react";
import More from "./More";

import Income from "./Income";
import Outlay from "./Outlay";

import "./styles/LibraryComponent.css";
import { LibraryWrapper } from "./LibraryStyled";
import { TitleStyled, Text } from "../common/StyledComponents";
// import DetailRowView from './library-components/table-components/DetailRowView'

function LibraryComponent() {
  const [table, setTable] = useState(<Outlay />);
  const [more, setMore] = useState();
  return (
    <LibraryWrapper className="library-body">
      <TitleStyled>Library</TitleStyled>
      <div className="table-wrapper">
        <div className="table-nav">
          <button
            className="table-btn active"
            id="btn1"
            onClick={() => {
              setTable(<Outlay />);
              document.querySelector("#btn1").classList.add("active");
              document.querySelector("#btn2").classList.remove("active");
            }}
          >
            <Text color= "inherit">Outlay</Text>
          </button>
          <button
            className="table-btn"
            id="btn2"
            onClick={() => {
              setTable(<Income />);
              document.querySelector("#btn2").classList.add("active");
              document.querySelector("#btn1").classList.remove("active");
            }}
          >
            <Text color= "inherit">Income</Text>
          </button>
        </div>
        {table}
        {/* <button className='button-more'
        onClick={() => setMore(<More />)}>More</button> */}
      </div>
      {more}
    </LibraryWrapper>
  );
}
export default LibraryComponent;
