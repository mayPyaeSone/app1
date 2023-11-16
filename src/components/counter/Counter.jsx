import React, { Component } from "react"
import './Counter.css';
import PropTypes from 'prop-types';

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            mainCounter : 0
        }
        this.increament = this.increament.bind(this)
        this.decremenent = this.decremenent.bind(this)
        this.reset = this.reset.bind(this)
    }
    render(){
        const style = {fontSize :"50px",padding : "15px 30px" };
        return(
            <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increament}  decremenentMethod={this.decremenent} />
            <CounterButton by={10} incrementMethod={this.increament} decremenentMethod={this.decremenent} />
            <CounterButton by={30} incrementMethod={this.increament} decremenentMethod={this.decremenent} />
            <span className="Counter" style={style}>{this.state.mainCounter} </span>
            <button onClick={this.reset}> reset</button>
            </div>
        );
    }
    increament (by) {// update state
       // console.log(`Increament from parent-${by}`);
        this.setState(
            {
                mainCounter : this.state.mainCounter + by
            }
        );
    }
    decremenent(by){
        this.setState(
            {
                mainCounter : this.state.mainCounter - by
            }
        )
    }
    reset(){
        this.setState(
            {
                mainCounter : 0
            }
        );
    }

}
class CounterButton extends Component{
// Define initial state in a constructor 
    constructor(){
        super();
        // this.state = {
        //     counter : 0
        // }
        // this.increament = this.increament.bind(this);
        // this.decremenent = this.decremenent.bind(this);
    }
    // render = () => { 
    render (){
        const style = {fontSize :"50px",padding : "15px 30px" };
        return(
            <div className="CounterButton">
            <button onClick={() =>this.props.incrementMethod(this.props.by)} > +{this.props.by}</button>
             <button onClick={() =>this.props.decremenentMethod(this.props.by)}> -{this.props.by}</button>
            {/*<span className="count" style={style}>{this.state.counter}</span>*/}
            </div>
        );
    }
    //increament = () => {
//     increament () {// update state
//         this.setState(
//             (prevState)=> {
//                 return {counter : prevState.counter + this.props.by}
//              }
//         );
//         this.props.incrementMethod(this.props.by);
       
//     }
//     decremenent(){
//         this.setState(
//             (prevStrate)=> {
//                 return{counter : prevStrate.counter+ this.props.by}
//             }
//         );
//         this.props.decremenentMethod(this.props.by);
//     }
}
CounterButton.defaultProps = {
    by : 1

}
CounterButton.propTypes = {
    by : PropTypes.number
}
export default Counter;