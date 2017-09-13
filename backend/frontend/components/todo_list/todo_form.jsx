import { uniqueId } from '../../util/id_generator'
import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    // debugger;
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.createTodo(todo).then(
      () => this.setState({ title: "", body: ""})
    ); // reset form
  }


  render() {
    // debugger;
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.update('title')}
            />
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="2% or whatever is on sale!"
            onChange={this.update('body')}
            ></textarea>
        </label>
        <ul>
          {this.props.errors.map(error => <li>{error}</li>)}
        </ul>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
};

export default TodoForm;
