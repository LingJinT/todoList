import React from "react";
import "./todoList.css";

class TodoLists extends React.Component {
  check(item, e) {
    console.log(e.target.checked);
    this.props.checked(item, e.target.checked);
  }
  render() {
    return (
      <ol>
        {this.props.todolist.map((item) => {
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
