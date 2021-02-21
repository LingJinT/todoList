export const addTodo = (todo) => {
    return {
        type: 'addTodo',
        todo,
    }
}

export const changeStatus = (item) => {
    return {
        type: 'changeStatus',
        item
    }
}