import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoList from "./todolist/index";
import stores from './todolist/store';

ReactDOM.render(
  <Provider store={stores}>
    <TodoList />
  </Provider>,
  document.getElementById("root")
);
