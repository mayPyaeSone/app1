import React,{Component} from "react";
import FirstCompoment from './components/learning-examples/FirstCompnent';
import SecondComponet from './components/learning-examples/SecondComponet';
import  ThirdComponent from './components/learning-examples/ThirdComponent';
import TodoApp from "./components/todo/TodoApp";
import Counter from './components/counter/Counter';
import './App.css';
import './bootstrap.css';

//Root Component
class App extends Component { 
   name = 'moe'
  render(){
    const renderName = 'renderMoe' 
    return (
      <div className="App">
      {/*<Counter />*/}
      <TodoApp></TodoApp>
     </div>
    );
  }
}

class LearningComponent extends Component{
  render(){
    return(
      <div className="LearningComponent">
      <FirstCompoment></FirstCompoment>
      <SecondComponet></SecondComponet>
      <ThirdComponent></ThirdComponent>
      <p></p>
      <p></p>
      <p></p>  
      </div>
    );
  }
}

export default App;
