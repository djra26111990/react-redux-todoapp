import { ADD_TODO, DELETE_TODO_LIST, DELETE_TODO, UPDATE_TODO, GET_TODOS } from "../constants/constants";

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todos: todo
    }
}

const updateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        todos: todo
    }
}

const deleteTodoList = () => {
    return {
        type: DELETE_TODO_LIST,
        todos: []
    }
}

const deleteTodo = (todo) => {
    return {
        type: DELETE_TODO,
        todos: todo
    }
}

const getTodos = (todos) => {
    return {
        type: GET_TODOS,
        todos: todos
    }
}

export const addTodoAction = todo => dispatch => {
    dispatch(addTodo(todo))
}

export const updateTodoAction = todo => dispatch => {
    dispatch(updateTodo(todo))
}

export const deleteTodoListAction = () => dispatch => {
    dispatch(deleteTodoList())
}

export const deleteTodoAction = todo => dispatch => {
    dispatch(deleteTodo(todo))
}

export const getTodosAction = todos => dispatch => {
    dispatch(getTodos(todos))
}
