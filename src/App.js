import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import TodosList from './components/todos-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';
class App extends Component{
  render(){
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">MERN APP</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to='/' className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to='/create' className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
         </nav>
         <br/>

          <Route exact path='/' component={TodosList}/>
          <Route path='/edit/:id' component={EditTodo}/>
          <Route path='/create' component={CreateTodo}/>
        </div>
      </Router>
    );
  }
}

export default App;