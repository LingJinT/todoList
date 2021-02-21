import React from "react";
import TodoLists from "./todoList.js";
import AddTodo from "./addTodo.js";
import Count from "./count.js";
import { connect } from 'react-redux'
import { addTodo, changeStatus } from './store/action';
import "./index.css";

class TodoList extends React.Component {
  render() {
    const { todoList, addTodo, changeStatus } = this.props;
    return (
      <div className="container">
        <div className="header">辰楠的代办清单</div>
        <AddTodo addTodo={addTodo} />
        <TodoLists
          todolist={todoList}
          checked={changeStatus}
        />
        <Count value={todoList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  changeStatus: (item) => dispatch(changeStatus(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
