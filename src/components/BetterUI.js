import React from 'react';

function BetterUI(props) {
    return (
        <div>
            <h1>A Simple Calculator</h1>
            <div className="result">
                <p>{props.data.result}</p>
            </div>
            <div className="container">
                <button onClick={(e) => props.handleChange(e.target.name)} name="0">0</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="1">1</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="2">2</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="+" style={{backgroundColor : "orange"}}>+</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="3">3</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="4">4</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="5">5</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="-" style={{backgroundColor : "orange"}}>-</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="6">6</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="7">7</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="8">8</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="*" style={{backgroundColor : "orange"}}>*</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="9">9</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="AC" style={{backgroundColor : "orange"}}>AC</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="CE" style={{backgroundColor : "orange"}}>CE</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="/" style={{backgroundColor : "orange"}}>/</button>
                <button onClick={(e) => props.handleChange(e.target.name)} name="=" id="equal" style={{backgroundColor : "#faba66"}} >=</button>
            </div>
        </div>
    )
}

export default BetterUI;