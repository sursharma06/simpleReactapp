import React, { Component } from 'react';

class AddTodos extends Component {
  constructor () {
    super();
    this.state = {
      newTodo: {},
    };
  }

  static defaultProps = {
    days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  };

  handleSubmit(e) {
    if (this.refs.work.value === '') {
      alert('a todo is required!');
    } else {
      this.setState({ newTodo: {
        work: this.refs.work.value,
        day: this.refs.day.value,
      }, }, function () {
        this.props.addTodo(this.state.newTodo);
      });
    }

    e.preventDefault();
  }

  render() {
    let dayOptions = this.props.days.map(day => {
      return <option key={day} value={day}>{day}</option>;
    });
    return (
      <div>
        <h3>Add Todos</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>

            <label>Todo</label>
            <br/>
            <input type="text" ref="work" />
              <br/>

            <label>Title</label>
            <br/>
            <select ref="day" >
              {dayOptions}
            </select>
            <br/>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default AddTodos;
