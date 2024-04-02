// import React, { useState } from "react";
// import './calculator.css';

// function Calculator() {
//     const [input, setInput] = useState('');
//     const [result, setResult] = useState('');

//     const handleButtonPress = (value) => {
//         if (value === '=') {
//             try {
//                 setResult(eval(input));
//             } catch (error) {
//                 setResult('Error');
//             }
//         } else if (value === 'C') {
//             setInput('');
//             setResult('');
//         } else if (value === 'del') {
//             setInput(input.slice(0, -1));
//         } else {
//             if (input === '' && ['+', '-', '*', '/'].includes(value)) {
//                 setInput('');
//             } else if (['+', '-', '*', '/'].includes(input.slice(-1)) && ['+', '-', '*', '/'].includes(value)) {
//                 setInput(input.slice(0, -1));
//             }
//             setInput(input + value);
//         }
//     };

//     return (
//         <div className="main">
//             <div className="counter_screen">
//                 <section className="screen">
//                     <div className="input">{input}</div>
//                     <div className="result">{result}</div>
//                 </section>
//             </div>

//             <section className="buttons">
//                 <div className="button_rows">
//                     <button className="button" onClick={() => handleButtonPress('C')}>C</button>
//                     <button className="button" onClick={() => handleButtonPress('del')}>del</button>
//                     <button className="button" onClick={() => handleButtonPress('%')}>%</button>
//                     <button className="button" onClick={() => handleButtonPress('/')}>/</button>
//                 </div>
//                 <div className="button_rows">
//                     <button className="button" onClick={() => handleButtonPress('7')}>7</button>
//                     <button className="button" onClick={() => handleButtonPress('8')}>8</button>
//                     <button className="button" onClick={() => handleButtonPress('9')}>9</button>
//                     <button className="button" onClick={() => handleButtonPress('*')}>X</button>
//                 </div>
//                 <div className="button_rows">
//                     <button className="button" onClick={() => handleButtonPress('4')}>4</button>
//                     <button className="button" onClick={() => handleButtonPress('5')}>5</button>
//                     <button className="button" onClick={() => handleButtonPress('6')}>6</button>
//                     <button className="button" onClick={() => handleButtonPress('-')}>-</button>
//                 </div>
//                 <div className="button_rows">
//                     <button className="button" onClick={() => handleButtonPress('1')}>1</button>
//                     <button className="button" onClick={() => handleButtonPress('2')}>2</button>
//                     <button className="button" onClick={() => handleButtonPress('3')}>3</button>
//                     <button className="button" onClick={() => handleButtonPress('+')}>+</button>
//                 </div>
//                 <div className="button_rows">
//                     <button className="button" id="zero" onClick={() => handleButtonPress('0')}>0</button>
//                     <button className="button" onClick={() => handleButtonPress('.')}>.</button>
//                     <button className="button" onClick={() => handleButtonPress('=')}>=</button>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Calculator;

import React, { useState } from "react";
import './calculator.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonPress = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input));
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === 'del') {
            setInput(input.slice(0, -1));
        } else {
            if (input === '' && ['+', '-', '*', '/'].includes(value)) {
                setInput('');
            } else if (['+', '-', '*', '/'].includes(input.slice(-1)) && ['+', '-', '*', '/'].includes(value)) {
                setInput(input.slice(0, -1));
            }
            setInput(input + value);
        }
    };

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
                    <button className="button" onClick={() => handleButtonPress('C')}>C</button>
                    <button className="button" onClick={() => handleButtonPress('del')}>del</button>
                    <button className="button" onClick={() => handleButtonPress('%')}>%</button>
                    <button className="button" onClick={() => handleButtonPress('/')}>/</button>
                </div>
                <div className="button_rows">
                    <button className="button" onClick={() => handleButtonPress('7')}>7</button>
                    <button className="button" onClick={() => handleButtonPress('8')}>8</button>
                    <button className="button" onClick={() => handleButtonPress('9')}>9</button>
                    <button className="button" onClick={() => handleButtonPress('*')}>X</button>
                </div>
                <div className="button_rows">
                    <button className="button" onClick={() => handleButtonPress('4')}>4</button>
                    <button className="button" onClick={() => handleButtonPress('5')}>5</button>
                    <button className="button" onClick={() => handleButtonPress('6')}>6</button>
                    <button className="button" onClick={() => handleButtonPress('-')}>-</button>
                </div>
                <div className="button_rows">
                    <button className="button" onClick={() => handleButtonPress('1')}>1</button>
                    <button className="button" onClick={() => handleButtonPress('2')}>2</button>
                    <button className="button" onClick={() => handleButtonPress('3')}>3</button>
                    <button className="button" onClick={() => handleButtonPress('+')}>+</button>
                </div>
                <div className="button_rows">
                    <button className="button" id="zero" onClick={() => handleButtonPress('0')}>0</button>
                    <button className="button" onClick={() => handleButtonPress('.')}>.</button>
                    <button className="button" onClick={() => handleButtonPress('=')}>=</button>
                </div>
            </section>
        </div>
    );
}

export default Calculator;
