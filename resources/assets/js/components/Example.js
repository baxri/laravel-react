import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Input from './input';

export default class Example extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                                <Button/>
                                <Input/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
