import './App.css';
import React, { Component } from 'react';
import Myheader from './component/header';
import { DropdownButton,Dropdown } from 'react-bootstrap';


export class App extends Component {
  constructor(props){
    super(props);
    this.setState({

    })
  }
  render() {
    return (
      <div>
          <Myheader></Myheader>
          <div id="mainbar">
            <DropdownButton id="dropdown-basic-button" title=" Hãng Sản Xuất ">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <button> Trả góp 0% </button>
            <button> Bảo hành máy </button>
            <button> Chính sách đổi trả </button>
          </div>
      </div>
    )
  }
}

export default App;
