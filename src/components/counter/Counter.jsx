import React, { Component } from "react";
import './Counter.css';

class Counter extends Component{
// Define initial state in a constructor 
    constructor(){
        super();
        this.state = {
            counter : 0,
            secondCounter: 100
        }
        this.increament = this.increament.bind(this);
    }
    // render = () => { 
    render (){
        const style = {fontSize :"50px",padding : "15px 30px" };
        return(
            <div className="counter">
            <button onClick={this.increament} > +1</button>
            <span className="count" style={style}>{this.state.counter}</span>
            <span className="count">{this.state.secondCounter}</span>
            </div>
        );
    }
    //increament = () => {
    increament () {// update state
        this.setState(
            {
                counter : this.state.counter + 1,
                secondCounter: this.state.secondCounter+1
            }
        );
    }
}

export default Counter;