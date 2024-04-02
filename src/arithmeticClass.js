// ArithmeticOperations.js

import React, { Component } from "react";
import './employeeForm.css';

class arithmeticClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            operationResult: ""
        };
    }

    performOperation = (operation) => {
        const { number1, number2 } = this.state;
        let result;
        switch (operation) {
            case 'add':
                result = parseFloat(number1) + parseFloat(number2);
                break;
            case 'sub':
                result = parseFloat(number1) - parseFloat(number2);
                break;
            case 'mul':
                result = parseFloat(number1) * parseFloat(number2);
                break;
            case 'div':
                result = parseFloat(number1) / parseFloat(number2);
                break;
            default:
                result = "";
        }
        this.setState({ operationResult: `Result : ${result.toFixed(2)}` });
    };

    handleOperation = (e, operation) => {
        e.preventDefault(); // Prevent form submission
        this.performOperation(operation);
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { operationResult } = this.state;

        return (
            <div className='main-div'>
                <form>
                    <div className="input-group">
                        <label htmlFor="number1">No 1:</label>
                        <input type="number" name="number1" id="number1" onChange={this.handleInputChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="number2">No 2:</label>
                        <input type="number" name="number2" id="number2" onChange={this.handleInputChange} />
                    </div>
                    <div className="btn-group">
                        <button className="btnSubmit" onClick={(e) => this.handleOperation(e, 'add')}>Add</button>
                        <button className="btnSubmit" onClick={(e) => this.handleOperation(e, 'sub')}>Subtract</button>
                    </div>
                    <div className="btn-group">
                        <button className="btnSubmit" onClick={(e) => this.handleOperation(e, 'mul')}>Multiply</button>
                        <button className="btnSubmit" onClick={(e) => this.handleOperation(e, 'div')}>Divide</button>
                    </div>
                </form>

                <p>{operationResult}</p>
            </div>
        );
    }
}

export default arithmeticClass;
