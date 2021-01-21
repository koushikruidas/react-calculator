import React, { Component } from 'react';
import BetterUI from './BetterUI';

class calculator extends Component{
    constructor(){
        super();
        this.state = {
            result: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name){
        console.log("Name :",name);
        if (name === "AC") {
            this.setState({
                result:""
            })
        }
        else if (name === "CE") {
            this.setState(prevState => {
                let newRes = prevState.result;
                return{
                    result : newRes.slice(0,-1)
                }
            })
        }
        else if (name === "=") {
            if (this.state.result.includes('--')) {
                const finalResult = this.state.result.replace("--", "+");
                this.setState({
                    result:eval(finalResult)
                })                
            }
            else{
                this.setState(prevState => {
                    return{
                        result:eval(prevState.result)
                    }
                })
            }
        }
        else{
            this.setState((prevState) =>{
                console.log("inside event handleer");
                console.log("prevState result: ", prevState.result);
                return{
                    result : prevState.result + name
                }
            })
        }
    }

    render(){
        return(
            <div className="calculator-ui">
                <BetterUI 
                    data={this.state}
                    handleChange={this.handleChange}
                    // submitChange={this.submitChange}    
                />
            </div>
        );
    }
}

export default calculator;