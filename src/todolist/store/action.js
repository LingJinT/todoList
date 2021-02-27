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

export const sagaTest = (saga="控制台打印的saga来自saga") => (
    {
        type: 'sagaTest',
        saga
    }
)