import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <li className="TodoItem">
        {this.props.todo.work} {'on'} {this.props.todo.day}
      </li>
    );
  }
}

export default TodoItem;
