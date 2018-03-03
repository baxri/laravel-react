import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {

    constructor(){
        super();
        this.state = {
            fullname : 'Giorgi Bibilashvili',
        };
    }

    changeEvent(e){
        this.setState({
            fullname : e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <input onChange={(e) => this.changeEvent(e)} value={this.state.fullname} />
                <p>{this.state.fullname}</p>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
