import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import TodoList from './todolist/index';
import { createStore } from 'redux'
import todoReducer from "./todolist/store/reducer";

let stores = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={stores}>
        <TodoList />
    </Provider>, 
    document.getElementById("root")
);
