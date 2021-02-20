import React from "react";
import TodoLists from "./todoList.js";
import AddTodo from "./addTodo.js";
import Count from "./count.js";
import { inject, observer } from "mobx-react";
import "./index.css";

@inject('todoStore')
@observer
class TodoList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">{this.props.todoStore.title}</div>
        <AddTodo />
        <TodoLists />
        <Count />
      </div>
    );
  }
}

export default TodoList;
