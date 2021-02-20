import React from "react";
import "./todoList.css";
import { inject, observer } from "mobx-react";

@inject('todoStore')
@observer
class TodoLists extends React.Component {
  check = (item) => {
    this.props.todoStore.changeStatus(item)
  }
  render() {
    const { todoList } = this.props.todoStore
    return (
      <ol>
        {todoList.map((item) => {
          return (
            <li key={item.name} className={item.status ? "complete" : ""}>
              {item.name}
              <input
                type="checkbox"
                defaultChecked={item.status}
                onClick={this.check.bind(this, item)}
              />
            </li>
          );
        })}
      </ol>
    );
  }
}

export default TodoLists;
