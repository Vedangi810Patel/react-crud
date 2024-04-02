// import React, {useState} from "react";
// import './employeeForm.css';


// function MathCalculation() {

//     const [num, setNum] = useState({
//         number1: 0,
//         number2: 0
//     });

//     const [add, setAdd] = useState(false);
//     const [sub, setSub] = useState(false);
//     const [div, setDiv] = useState(false);
//     const [mul, setMul] = useState(false);

//     const AddNum = e => {
//         e.preventDefault();
//         setNum({
//             number1: num.number1,
//             number2: num.number2
//         });
//         setAdd(true);
//         setSub(false);
//         setMul(false);
//         setDiv(false)
//     };

//     const SubNum = e => {
//         e.preventDefault();
//         setNum({
//             number1: num.number1,
//             number2: num.number2
//         });
//         setAdd(false);
//         setSub(true);
//         setMul(false);
//         setDiv(false)
//     };

//     const MulNum = e => {
//         e.preventDefault();
//         setNum({
//             number1: num.number1,
//             number2: num.number2
//         });
//         setAdd(false);
//         setSub(false);
//         setMul(true);
//         setDiv(false)
//     };

//     const DivNum = e => {
//         e.preventDefault();
//         setNum({
//             number1: num.number1,
//             number2: num.number2
//         });
//         setAdd(false);
//         setSub(false);
//         setMul(false);
//         setDiv(true)

//     };

//     const UpdateField = e => {
//         setNum({
//             ...num,
//             [e.target.name]: e.target.value
//         });
//     };

//     return (
//         <div className='main-div'>
//             <form >
//                 <label id='number1' htmlFor="number1" > Number 1 : </label>
//                 <input type="number" name="number1" id="number1" onChange={UpdateField}/><br />

//                 <label id='number2' htmlFor="number2" > Number 2 : </label>
//                 <input type="number" name="number2" id="number2" onChange={UpdateField}/> <br />

//                 <button className="btnSubmit" onClick={AddNum}>Add</button>
//                 <button className="btnSubmit" onClick={SubNum}>Subtract</button>
//                 <button className="btnSubmit" onClick={MulNum}>Multiply</button>
//                 <button className="btnSubmit" onClick={DivNum}>Divide</button>

//             </form>

//             <p> {add ? parseFloat((num.number1) + (num.number2)).toFixed(2) : null} </p>
//             <p> {sub ? parseFloat((num.number1) - (num.number2)).toFixed(2) : null} </p>
//             <p> {mul ? parseFloat((num.number1) * (num.number2)).toFixed(2) : null} </p>
//             <p> {div ? parseFloat((num.number1) / (num.number2)).toFixed(2) : null} </p>

//         </div>
//     )
// }

// export default MathCalculation;

// MathCalculation.js

// ArithmeticOperations.js

import React, { useState } from "react";
import './employeeForm.css';

function ArithmeticOperations() {

    const [num, setNum] = useState({
        number1: 0,
        number2: 0
    });

    const [operationResult, setOperationResult] = useState("");

    const performOperation = (operation) => {
        let result;
        switch (operation) {
            case 'add':
                result = parseFloat(num.number1) + parseFloat(num.number2);
                break;
            case 'sub':
                result = parseFloat(num.number1) - parseFloat(num.number2);
                break;
            case 'mul':
                result = parseFloat(num.number1) * parseFloat(num.number2);
                break;
            case 'div':
                result = parseFloat(num.number1) / parseFloat(num.number2);
                break;
            default:
                result = "";
        }
        setOperationResult(`Result : ${result.toFixed(2)}`);
    };

    const handleOperation = (e, operation) => {
        e.preventDefault();
        performOperation(operation);
    };

    const UpdateField = e => {
        setNum({
            ...num,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='main-div'>
            <form>
                <div className="input-group">
                    <label htmlFor="number1">NO 1:</label>
                    <input type="number" name="number1" id="number1" onChange={UpdateField} />
                </div>
                <div className="input-group">
                    <label htmlFor="number2">NO 2:</label>
                    <input type="number" name="number2" id="number2" onChange={UpdateField} />
                </div>
                <div className="btn-group">
                    <button className="btnSubmit" onClick={(e) => handleOperation(e, 'add')}>Add</button>
                    <button className="btnSubmit" onClick={(e) => handleOperation(e, 'sub')}>Subtract</button>
                </div>
                <div className="btn-group">
                    <button className="btnSubmit" onClick={(e) => handleOperation(e, 'mul')}>Multiply</button>
                    <button className="btnSubmit" onClick={(e) => handleOperation(e, 'div')}>Divide</button>
                </div>
            </form>

            <p>{operationResult}</p>
        </div>
    )
}

export default ArithmeticOperations;
