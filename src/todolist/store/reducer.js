const defaultValue = {
  todoList: [
    {
      name: "默认任务",
      status: true,
    },
  ],
};

const todoReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "addTodo": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.todoList.push({
        name: action.todo,
        status: false,
      });
      return newState;
    }
    case "changeStatus": {
      const newState = JSON.parse(JSON.stringify(state));
      // 由于深拷贝后数组的指针不一样，所以下面采用原数组去寻找index
      const index = state.todoList.indexOf(action.item);
      newState.todoList[index].status = !newState.todoList[index].status;
      return newState;
    }
    case "sagaTest": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.todoList.push({
        name: action.saga,
        status: true,
      });
      return newState;
    }
    default:
      return state;
  }
};

export default todoReducer;
