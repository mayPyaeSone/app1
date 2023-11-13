import React, { Component } from "react"
import './Counter.css';
import PropTypes from 'prop-types';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        //this.increament = this.increament.bind(this)
    }
    render(){
        const style = {fontSize :"50px",padding : "15px 30px" };
        return(
            <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increament} />
            <CounterButton by={10} incrementMethod={this.increament} />
            <CounterButton by={30} incrementMethod={this.increament} />
            <span className="Counter" style={style}>{this.state.counter} </span>
            </div>
        );
    }
    increament (by) {// update state
       // console.log(`Increament from parent-${by}`);
        this.setState(
            {
                counter : this.state.counter + by
            }
        );
    }
}
class CounterButton extends Component{
// Define initial state in a constructor 
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increament = this.increament.bind(this);
    }
    // render = () => { 
    render (){
        const style = {fontSize :"50px",padding : "15px 30px" };
        return(
            <div className="CounterButton">
            <button onClick={this.increament} > +{this.props.by}</button>
            <span className="count" style={style}>{this.state.counter}</span>
            </div>
        );
    }
    //increament = () => {
    increament () {// update state
        this.setState(
            {
                counter : this.state.counter + this.props.by
            }
        );
        this.props.incrementMethod(this.props.by);
    }
}
CounterButton.defaultProps = {
    by : 1

}
CounterButton.propTypes = {
    by : PropTypes.number
}
export default Counter;