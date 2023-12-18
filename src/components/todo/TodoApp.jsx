import React,{Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WithNavigation from "./WithNavigation";    
import WithParams from "./WithParams";
class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = WithNavigation(LoginComponent);
        const  WelcomeComponentWithParams = WithParams(WelcomeComponent);
        return(
            <div className="TodoApp">
            <Router>
            <HeaderCompoment/>
            <Routes>
                <Route path="/" element={<LoginComponentWithNavigation />} />
                <Route path="/login" element={<LoginComponentWithNavigation />} />
                <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                <Route path="/todos" element={<ListTodoComponent />} />
                <Route path="/logout" element={<LogoutComponent />} />
                <Route path="*" element={<ErrorComponent />} />
            </Routes>
            <FooterCompoment/>
        </Router>
            </div>
        );
    }

}
class HeaderCompoment extends Component{
    render(){
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="http://www.in28minutes.com" className="navbar-brand">in28minutes</a></div>
                <ul className="navbar-nav">
                    <li className="nav-link"><Link to="/welcome/in28minutes">Home</Link></li>
                    <li className="nav-link"><Link to="/todos">Todos</Link></li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-link"><Link to="/login">Login</Link></li>
                    <li className="nav-link"><Link to="/logout">Logout</Link></li>
                 </ul>
                </nav>
            </header>
           
        )
    }
}
class LogoutComponent extends Component{
    render(){
        return(
            <div>
                <h1>You are Logout.</h1>
                <div className="container">
                    Thank you for using our application.
                </div>
            </div>
        )
    }
}
class FooterCompoment extends Component{
    render(){
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2018 @in28minute</span>
            </footer>
        )
    }
}
class ListTodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos: [
                {id: 1, description : 'Learn React', done:false, targetDate: new Date()},
                {id: 2, description : 'Become an Expert at React' , done:false, targetDate: new Date()},
                {id: 3, description : 'Visit India' , done:false, targetDate: new Date()},
            
            ]
        }
    }
    render(){
       return (
        <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>Is Completed</th>
                        <th>Target Date</th>
                    </tr>
                </thead>
            <tbody>
               {
                this.state.todos.map(
                    todo =>
                    <tr>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetDate.toString()}</td>
                    </tr>
                )
               }
            </tbody>
            </table>
        </div>
       )
    }
}
class WelcomeComponent extends Component{
    render(){
        return (
            <div>Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link></div> 
            )
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
export default TodoApp;