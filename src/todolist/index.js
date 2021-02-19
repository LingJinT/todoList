import React from "react";
import TodoLists from "./todoList.js";
import AddTodo from "./addTodo.js";
import Count from "./count.js";
import "./index.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          name: "默认任务",
          status: true,
        },
      ],
    };
  }
  addTodo(todo) {
    const preTodo = this.state.todoList.slice();
    preTodo.push({
      name: todo,
      status: false,
    });
    this.setState({
      todoList: preTodo,
    });
  }
  checked(value, status) {
    const preTodo = this.state.todoList.slice();
    const todoIndex = preTodo.indexOf(value);
    preTodo[todoIndex].status = status;
    this.setState({
      todoList: preTodo,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="header">辰楠的代办清单</div>
        <AddTodo addTodo={this.addTodo.bind(this)} />
        <TodoLists
          todolist={this.state.todoList}
          checked={this.checked.bind(this)}
        />
        <Count value={this.state.todoList} />
      </div>
    );
  }
}

export default TodoList;
