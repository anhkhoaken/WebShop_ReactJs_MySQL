import React, { Component } from 'react';
import './styles/headerstyles.css';
import mylogo from '../images/mylogo.png';
import { Button } from 'react-bootstrap';
import icon_chart from '../images/icon_chart.png'

export class Myheader extends Component {
    render() {
        return (
            <div id="myheader">
                <img src={mylogo}></img>
                <div id="search">
                    <input id="searchBox"></input>
                    <Button id="button" variant="success"> Tìm Kiếm </Button>
                    <img id="chart" src={icon_chart}></img>
                </div>
                <div id="login">
                    <text> Đăng Nhập </text>
                    <text> Chưa có Tài Khoản! Đăng Kí Ngay </text>
                </div>   
            </div>
        )
    }
}

export default Myheader;

