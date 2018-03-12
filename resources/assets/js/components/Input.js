import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Input extends Component {
    render() {
        return (
            <input placeholder="Enter Name" name="name" className="input-group"/>
        );
    }
}
