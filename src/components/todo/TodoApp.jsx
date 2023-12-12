import React,{Component} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithNavigation from "./WithNavigation";   
import WithParams from "./WithParams";
class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = WithNavigation(LoginComponent);
        const WelcomeComponentWithParams = WithParams(WelcomeComponent);
        return(
            <div className="TodoApp">
            <Router>
            <Routes>
                <Route path="/" element={<LoginComponentWithNavigation />} />
                <Route path="/login" element={<LoginComponentWithNavigation />} />
                <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                <Route path="*" element={<ErrorComponent />} />
            </Routes>
        </Router>
            </div>
        );
    }

}
class WelcomeComponent extends Component{
    render(){
        return <div>Welcome {this.props.params.name}</div>
    }
}
function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}
class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            username: 'in28minute',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,

        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event){
        //console.log(this.state);
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }
    loginClicked(props){
        //in28minutes, dummy
        if(this.state.username === 'in28minutes' && this.state.password==='dummy') {   
        {/*console.log('Successful');
        this.setState({showSuccessMessage:true})
        this.setState({hasLoginFailed: false})*/}
        {/* this.props.history.push(`/welcome/${this.state.username}`)*/}
        this.props.navigate(`/welcome/${this.state.username}`)
        }else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed: true})
           }

        console.log(this.state);
    }
    render(){
        return(
            <div className="LoginComponent">
            <ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>
            <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage}/>
             Username:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
             Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }

}
function  ShowInvalidCredential(props) {
        if(props.hasLoginFailed){
            return <div>Invalid Credential</div>
        }
        return null
}
function  ShowLoginSuccess(props) {
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }
    return null
}
export default TodoApp;