import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };

  }

  componentWillMount() {
    this.setState({
      todos: [
        {
          work: 'Finish Homework',
          day: 'Saturday',
        }, {
          work: 'Do the Laundry',
          day: 'Friday',
        }, {
          work: 'Cook for the week',
          day: 'Sunday',
        },
      ],
    });
  }

  handleAddTodos(todo) {
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <AddTodos addTodo={this.handleAddTodos.bind(this)} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
