import React, { Component } from 'react';


const numbers = [1,2,3,4,5];

export default class NameTag extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    };
    listItem = numbers.map((number) => 
<li> {number}</li>
    );
    render() {
        return (
            <div className="member">
    <ul>{this.listItem}</ul>
            </div>
        )
    }
}

