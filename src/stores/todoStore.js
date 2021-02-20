import { observable, action, computed, makeObservable } from 'mobx';

 class todoListStore {
    constructor() {
        makeObservable(this)
    }
    @observable todoList = [
        {
            name: '默认任务',
            status: true
        }
    ];

    @observable title = '辰楠的待办清单'

    @computed
    get total() {
        return this.todoList.length
    }

    @computed
    get finishedTotal() {
        return this.todoList.filter(item=>item.status === true).length
    }

    @computed
    get notFinishedTotal() {
        return this.todoList.filter(item=>item.status === false).length
        
    }

    @action
    setTitle = () => {
        this.title = '修改过后的代办清单'
        console.log('setTitle');
    }

    @action
    addTodo = (todo) => {
        this.todoList.push({
            name: todo,
            status: false
        })
        console.log('addTodo');
    }

    @action
    changeStatus = (item) => {
        const Index = this.todoList.indexOf(item)
        this.todoList[Index].status = !this.todoList[Index].status
        console.log('changeStatus');
    }
}

export default new todoListStore()