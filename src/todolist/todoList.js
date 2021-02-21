import React from "react";
import "./todoList.css";

class TodoLists extends React.Component {
  render() {
    const { checked } = this.props
    return (
      <ol>
        {this.props.todolist.map((item) => {
          return (
            <li key={item.name} className={item.status ? "complete" : ""}>
              {item.name}
              <input
                type="checkbox"
                defaultChecked={item.status}
                onClick={checked.bind(this,item)}
              />
            </li>
          );
        })}
      </ol>
    );
  }
}

export default TodoLists;
