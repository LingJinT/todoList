import React from "react";
import ReactDOM from "react-dom";
import TodoList from './todolist/index';
import { Provider } from "mobx-react";

import todoStore from './stores/todoStore'

const stores = {
    todoStore,
}

ReactDOM.render(
    <Provider {...stores}>
        <TodoList />
    </Provider>,
    document.getElementById("root")
);
