import React,{Component} from "react";


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
            <div class="container">
                <table class="table">
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
        </div>
       )
    }
}

export default ListTodoComponent;