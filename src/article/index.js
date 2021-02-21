import React, { Component } from 'react';
import ArticleDetail from './detail';
import ReactArticle from './react';
import VueArticle from './vue';
import AngularArticle from './angular';
import {Route, Link} from 'react-router-dom';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {
                    uid: 111,
                    title: 'react指南',
                    path: '/article/react',
                    component: ReactArticle
                },
                {
                    uid: 222,
                    title: 'vue指南',
                    path: '/article/vue',
                    component: VueArticle
                },
                {
                    uid: 333,
                    title: 'angular指南',
                    path: '/article/angular',
                    component: AngularArticle
                }
            ]
        }
    }
    render() { 
        return (
            <div>
                <Link to="/">返回首页</Link>
                <h2>文章首页</h2>
                <ul>
                    {
                        this.state.list.map((item)=>{
                            return (
                                    <Link to={'/article/'+item.uid} key={item.uid}>
                                        <li>{item.title}---动态路由</li>
                                    </Link>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        this.state.list.map((item)=>{
                            return (
                                <Link to={item.path} key={item.uid}>
                                    <li>{item.title}---嵌套路由</li>
                                </Link>
                            )
                        })
                    }
                </ul>
                <Route path="/article/:id" component={ArticleDetail} />
                {
                    this.state.list.map((item)=>{
                        return(
                            <Route key={item.uid} path={item.path} component={item.component}/>
                        )
                    })
                }
            </div> 
        );
    }
}
 
export default Article;