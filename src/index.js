import React from "react";
import ReactDOM from "react-dom";
import TodoList from './todolist/index';
import Article from './article';
import {Route, BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Route path="/" exact component={TodoList}/>
        <Route path="/article" component={Article}/>
    </Router>,
    document.getElementById("root"));
