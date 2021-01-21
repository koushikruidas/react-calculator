import React from 'react';
import './calculator.css'

function MyCalUI(props){
    return(
        <div className="elements">
            <h1>A Simple Calculator</h1>
            <form className="calculator-form" onSubmit={props.submitChange}>
                <label>
                    Num1: 
                    <input 
                        name="firstNum" 
                        type="text" 
                        placeholder="Enter" 
                        onChange={props.handleChange} 
                        value={props.data.firstNum}
                        autoComplete="off"
                    />
                </label>
                <label>
                    Num2: 
                    <input 
                        name="lastNum" 
                        type="text" 
                        placeholder="Enter" 
                        onChange={props.handleChange} 
                        value={props.data.lastNum}
                        autoComplete="off"
                    />
                </label>
                <label>
                    Select operation: 
                    <select
                        name="operator"
                        value={props.data.operator}
                        onChange={props.handleChange}
                    >
                        <option>--Please Select some operation--</option>
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                    </select>
                </label>
                <button>Result</button>
            </form>
            <h2>Result: {props.data.result}</h2>
        </div>
    )
}

export default MyCalUI;