---
title: Redux 学习笔记
---
## 一、为什么需要Redux

主要原因还是**异步**和**变化**，随着项目越来越大，state在某个时刻由于什么原因，如何变化会不受控制，当系统越来越复杂时，想重现问题或者添加新功能就会举步维艰。Redux的出现就是为了解决**异步**和**变化**的问题

## 二、核心概念

1.state： 状态

2.action： 用来描述发生了什么变化

3.reducer：把action和state连接起来，接收一个state 和 action， 并返回新的state的函数。当应用变大的时候应当编写很多小函数来分别管理state的一部分。不能做以下操作：修改传入参数；执行有副作用的操作，如 API 请求和路由跳转；调用非纯函数，如 Date.now() 或 Math.random()。保持纯净。

4.store: 一个Redux应用只有单一一个store,有以下职责：维持应用的 state；提供 getState() 方法获取 state；提供 dispatch(action) 方法更新 state；通过 subscribe(listener) 注册监听器;通过 subscribe(listener) 返回的函数注销监听器。

## 三、三大原则

### 单一数据源

整个应用的state被储存在一棵object tree中，并且这个object tree只存在于唯一一个store中

### State是只读的

唯一改变state的方法就是出发action,action是一个用于描述已发生事件的普通对象

### 使用纯函数来执行修改

为了描述action如何改变state tree，你需要编写reducers。

## 四、数据流

Redux 应用中数据的生命周期遵循下面 4 个步骤：

1.调用 store.dispatch(action)

2.Redux store调用传入的reducer函数

3.根ruducer应该把多个子reducer输出合并成一个单一的state树

4.Redux store 保存了根reducer返回的完整state树