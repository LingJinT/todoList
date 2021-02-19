import React from "react";
import "./count.css";

class Count extends React.Component {
  render() {
    const todos = this.props.value;
    let total = 0;
    let completeTotal = 0;
    let notCompleteTotal = 0;
    todos.forEach((item) => {
      if (item.status === true) {
        completeTotal++;
      } else {
        notCompleteTotal++;
      }
      total++;
    });
    return (
      <div>
        共有<span className="fontBlue">{total}</span>计划，已完成
        <span className="fontGreen">{completeTotal}</span>件，待完成
        <span className="fontRed">{notCompleteTotal}</span>件
      </div>
    );
  }
}

export default Count;
