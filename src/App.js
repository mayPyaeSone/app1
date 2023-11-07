import React,{Component} from "react";
import FirstCompoment from './components/learning-examples/FirstCompnent';
import SecondComponet from './components/learning-examples/SecondComponet';
import  ThirdComponent from './components/learning-examples/ThirdComponent';

//Root Component
class App extends Component { 
   name = 'moe'
  render(){
    const renderName = 'renderMoe' 
    return (
      <div className="App">
      <FirstCompoment></FirstCompoment>
      <SecondComponet></SecondComponet>
      <ThirdComponent></ThirdComponent>      
      </div>
    );
  }
}

export default App;
