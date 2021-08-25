import { render } from "@testing-library/react";
import React from "react";

//export default function LargeInput() 
class LargeInput extends React.Component {
    state = {
        categorys: [
            'transport',
            'taxi',
            'restoran',
            'food',
        ],
        searchTerm: ''
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    dynamicSearch = () => {
        return this.state.categorys.filter(category => category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }


    render() {
        return (
            <div className="largeInput">
                <input type="text" className="input" value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder="Search" />
                <br></br>
                <categorysContainer names = {this.dynamicSearch()}/>
                <svg className="iconSearch" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="4.3" stroke="#1B2559" stroke-width="1.4"/>
                <line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke="#1B2559" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
        </div>
    );
    }
}

export default LargeInput;