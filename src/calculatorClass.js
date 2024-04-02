import React, { Component } from "react";
import './calculator.css';

class calculatorClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            result: ''
        };
    }

    handleButtonPress = (value) => {
        const { input } = this.state;

        if (value === '=') {
            try {
                const result = eval(input);
                this.setState({ result });
            } catch (error) {
                this.setState({ result: 'Error' });
            }
        } else if (value === 'C') {
            this.setState({ input: '', result: '' });
        } else if (value === 'del') {
            this.setState({ input: input.slice(0, -1) });
        } else {
            this.setState({ input: input + value });
        }
    };

    render() {
        const { input, result } = this.state;

        return (
            <div className="main">
                <div className="counter_screen">
                    <section className="screen">
                        <div className="input">{input}</div>
                        <div className="result">{result}</div>
                    </section>
                </div>

                <section className="buttons">
                    <div className="button_rows">
                        <button className="button" onClick={() => this.handleButtonPress('C')}>C</button>
                        <button className="button" onClick={() => this.handleButtonPress('del')}>del</button>
                        <button className="button" onClick={() => this.handleButtonPress('%')}>%</button>
                        <button className="button" onClick={() => this.handleButtonPress('/')}>/</button>
                    </div>
                    <div className="button_rows">
                        <button className="button" onClick={() => this.handleButtonPress('7')}>7</button>
                        <button className="button" onClick={() => this.handleButtonPress('8')}>8</button>
                        <button className="button" onClick={() => this.handleButtonPress('9')}>9</button>
                        <button className="button" onClick={() => this.handleButtonPress('*')}>X</button>
                    </div>
                    <div className="button_rows">
                        <button className="button" onClick={() => this.handleButtonPress('4')}>4</button>
                        <button className="button" onClick={() => this.handleButtonPress('5')}>5</button>
                        <button className="button" onClick={() => this.handleButtonPress('6')}>6</button>
                        <button className="button" onClick={() => this.handleButtonPress('-')}>-</button>
                    </div>
                    <div className="button_rows">
                        <button className="button" onClick={() => this.handleButtonPress('1')}>1</button>
                        <button className="button" onClick={() => this.handleButtonPress('2')}>2</button>
                        <button className="button" onClick={() => this.handleButtonPress('3')}>3</button>
                        <button className="button" onClick={() => this.handleButtonPress('+')}>+</button>
                    </div>
                    <div className="button_rows">
                        <button className="button" id="zero" onClick={() => this.handleButtonPress('0')}>0</button>
                        <button className="button" onClick={() => this.handleButtonPress('.')}>.</button>
                        <button className="button" onClick={() => this.handleButtonPress('=')}>=</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default calculatorClass;
