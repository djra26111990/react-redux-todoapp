import React from "react";
import { TodoItem } from "./TodoItem";
import { ButtonAction } from "./ButtonAction";
import * as actions from "../redux/actions/actions";
import { useStateRedux } from '../hooks/useStateRedux'
import { useTodosValues } from '../hooks/useTodosValues'

let indexTodo = 0;
export const TodoList = () => {
  const { todo, setTodo, error, setError, loadingData } = useTodosValues()
  const { dispatch, todos } = useStateRedux()
  const addTodoToList = actions.addTodoAction;
  const deleteTodoList = actions.deleteTodoListAction;
  
  const handleChange = (e) => {
    setTodo({
      ...todo,
      id: indexTodo++,
      todo: e.target.value,
      isComplete: false,
    });
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo.todo.trim()) {
      setError(true);
      return setTimeout(() => setError(false), 1200);
    }

    dispatch(addTodoToList(todo));
    setTodo({ id: null, todo: "", isComplete: false });
    document.getElementById("todo").value = "".trim();
  };
  const handleDeleteTodoList = (e) => {
    e.preventDefault();
    setTodo({ id: null, todo: "", isComplete: false });
    document.getElementById("todo").value = "".trim();
    dispatch(deleteTodoList());
  };

  return (
    <div style={{ display: 'flex'}}>
      {loadingData ? (
        "Loading..."
      ) : (
        <div style={{ padding: '5px', flexDirection: 'column'}}>
          <input
            style={{ padding: '5px'}}
            id="todo"
            onChange={handleChange}
            type="text"
            placeholder="Enter a todo"
          />
          {error ? <h2 style={{ color: '#ff3333', background: '#ff9999', padding: '10px'}}>No puede estar vacio el campo</h2> : null}
          <ButtonAction onClick={handleAddTodo}>Add Todo</ButtonAction>
          <ButtonAction onClick={handleDeleteTodoList}>
            Delete Todo List
          </ButtonAction>
          {todos.map((elem, index) => {
            return (
              <TodoItem
                todo={elem.todo}
                isComplete={elem.isComplete}
                updateButton={
                  <ButtonAction
                    onClick={() => dispatch(actions.updateTodoAction(elem))}
                  >
                    Update Todo
                  </ButtonAction>
                }
                deleteButton={
                  <ButtonAction
                    onClick={() => dispatch(actions.deleteTodoAction(elem))}
                  >
                    Delete Todo
                  </ButtonAction>
                }
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
