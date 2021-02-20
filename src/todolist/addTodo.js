import React from "react";
import { inject, observer } from "mobx-react";

@inject('todoStore')
@observer
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
  addTodo = () => {
    this.props.todoStore.addTodo(this.state.todo)
    this.props.todoStore.setTitle()
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
        <button onClick={this.addTodo}>添加</button>
      </form>
    );
  }
}

export default addTodo;
