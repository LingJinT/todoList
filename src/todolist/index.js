import React from "react";
import TodoLists from "./todoList.js";
import AddTodo from "./addTodo.js";
import Count from "./count.js";
import { connect } from 'react-redux'
import { addTodo, changeStatus, sagaTest } from './store/action';
import "./index.css";

class TodoList extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { todoList, addTodo, changeStatus, sagaTest } = this.props;
    return (
      <div className="container">
        <div className="header">辰楠的代办清单</div>
        <AddTodo addTodo={addTodo} />
        <TodoLists
          todolist={todoList}
          checked={changeStatus}
        />
        <Count value={todoList} />
        <button onClick={sagaTest}>添加一条来自saga的信息</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  changeStatus: (item) => dispatch(changeStatus(item)),
  sagaTest: () => dispatch(sagaTest())
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
