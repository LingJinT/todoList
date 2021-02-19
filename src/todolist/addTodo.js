import React from "react";

class addTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }
  setTodo(e) {
    this.setState({
      todo: e.target.value,
    });
  }
  addTodo() {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: "",
    });
  }
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input onChange={this.setTodo.bind(this)} value={this.state.todo} />
        <button onClick={this.addTodo.bind(this)}>添加</button>
      </form>
    );
  }
}

export default addTodo;
