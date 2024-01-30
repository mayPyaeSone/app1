import React,{Component} from "react";
import AuthenticationService from "./AuthenticationService.js";


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
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
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
            <h1>Login</h1>
             Username:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
             Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        );
    }

}
function  ShowInvalidCredential(props) {
    if(props.hasLoginFailed){
        return <div className="alert alert-warning">Invalid Credential</div>
    }
    return null
}
function  ShowLoginSuccess(props) {
if(props.showSuccessMessage){
    return <div>Login Successful</div>
}
return null
}

export default LoginComponent;