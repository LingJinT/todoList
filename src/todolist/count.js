import React from "react";
import "./count.css";
import { inject, observer } from "mobx-react";

@inject('todoStore')
@observer
class Count extends React.Component {
  render() {
    const {total, finishedTotal, notFinishedTotal} = this.props.todoStore
    return (
      <div>
        共有<span className="fontBlue">{total}</span>计划，已完成
        <span className="fontGreen">{finishedTotal}</span>件，待完成
        <span className="fontRed">{notFinishedTotal}</span>件
      </div>
    );
  }
}

export default Count;
