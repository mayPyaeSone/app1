import React,{Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogoutComponent from "./LogoutComponent";
class WelcomeComponent extends Component{
    render(){
        <Route path="/logout" element={<LogoutComponent />} />
        return (
            <> 
                <h1>Welcome</h1>
                <div className="container">Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link></div> 
                <div className="container">
                Click here to get customized Welcome message.
                <button onClick={this.retriveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div> 
            </>
           
            )
    }
}
export default WelcomeComponent;