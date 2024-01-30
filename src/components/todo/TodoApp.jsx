import React,{Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WithNavigation from "./WithNavigation";    
import WithParams from "./WithParams";
import AuthenticatedRoute  from "./AuthenticatedRoute.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import FooterCompoment from "./FooterCompoment.jsx";
import ListTodoComponent from "./ListTodoComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import LoginComponent from "./LoginComponent.jsx";
class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = WithNavigation(LoginComponent);
        const HeaderComponentWithNavigation = WithNavigation(HeaderComponent);
        const  WelcomeComponentWithParams = WithParams(WelcomeComponent);
        return(
            <div className="TodoApp">
            <Router>
            <HeaderComponentWithNavigation/>
            <Routes>
                <Route path="/" element={<LoginComponentWithNavigation />} />
                <Route path="/login" element={<LoginComponentWithNavigation />} />
                <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />
                <Route path="/todos" element={<AuthenticatedRoute><ListTodoComponent /></AuthenticatedRoute>} />
                <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
                <Route path="*" element={<ErrorComponent />} />
            </Routes>
            <FooterCompoment/>
        </Router>
            </div>
        );
    }

}
function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}
export default TodoApp;