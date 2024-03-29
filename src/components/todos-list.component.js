import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props =>(
	<tr>
		<td className={props.todo.todo_completed ? 'completed': ''}>{props.todo.todo_description}</td>
		<td className={props.todo.todo_completed ? 'completed': ''}>{props.todo.todo_responsible}</td>
		<td className={props.todo.todo_completed ? 'completed': ''}>{props.todo.todo_priority}</td>
		<td>
			<Link to={'/edit/'+props.todo._id}>Edit</Link>
		</td>
	</tr>
)
class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {todos: []};
	}
	componentDidMount(){
		axios.get('http://localhost:4000/api/todos/')
			.then(response=>{
				this.setState({todos: response.data});
			})
			.catch(function(error){
				console.log(error);
			})
	}
	todoList(){
		return this.state.todos.map(function(currentTodo, i){
			return <Todo todo={currentTodo} key={i} />;
		})
	}

	render(){
		return(
			<div>
				<h3>Todo List</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Description</th>
							<th>Responsible</th>
							<th>Priority</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.todoList()}
					</tbody>
				</table>
			</div>
			);
	}
}

export default TodoList;