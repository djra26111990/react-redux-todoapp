import React from "react";
import { TodoItem } from "./TodoItem";
import { ButtonAction } from "./ButtonAction";
import * as actions from "../redux/actions/actions";
import { useStateRedux } from "../hooks/useStateRedux";
import { useTodosValues } from "../hooks/useTodosValues";

export const TodoList = () => {
  const {
    todo,
    setTodo,
    error,
    setError,
    loadingData,
    indexTodo,
    setIndexTodo,
  } = useTodosValues();
  const { dispatch, todos } = useStateRedux();
  const addTodoToList = actions.addTodoAction;
  const deleteTodoList = actions.deleteTodoListAction;
  let index = indexTodo;
  const handleChange = (e) => {
    setTodo({
      ...todo,
      id: index++,
      todo: e.target.value,
      isComplete: false,
    });
    setIndexTodo(index);
    localStorage.setItem("indexTodo", indexTodo);
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

  let styleBtn = "p-4 m-2 rounded border-2 ring-0 text-white";
  let styleBtnAddTodo = `${styleBtn} bg-green-500 hover:bg-green-700`;
  let styleBtnDeleteTodos = `${styleBtn} bg-red-500 hover:bg-red-700`;
  let styleBtnUpdateTodo = `${styleBtn} bg-green-500 hover:bg-green-700 columns-3`;
  let styleBtnDeleteTodo = `${styleBtn} bg-red-500 hover:bg-red-700 columns-3`;

  return (
    <div>
      {loadingData ? (
        "Loading..."
      ) : (
        <div className="container mx-auto px-4 text-center">
          <input
            className="p-4 border-2 mx-auto sm:p-2"
            id="todo"
            onChange={handleChange}
            type="text"
            placeholder="Enter a todo"
          />
          <ButtonAction className={styleBtnAddTodo} onClick={handleAddTodo}>
            Add Todo
          </ButtonAction>
          <ButtonAction
            className={styleBtnDeleteTodos}
            onClick={handleDeleteTodoList}
          >
            Delete Todo List
          </ButtonAction>
          {error ? (
            <div className="shadow-md p-4 bg-red-400 w-auto m-2">
              <h2 className="text-red-600">No puede estar vacio el campo</h2>
            </div>
          ) : null}
          {todos.map((elem, index) => {
            return (
              <TodoItem
                todo={elem.todo}
                isComplete={elem.isComplete}
                updateButton={
                  <ButtonAction
                    className={styleBtnUpdateTodo}
                    onClick={() => dispatch(actions.updateTodoAction(elem))}
                  >
                    Update Todo
                  </ButtonAction>
                }
                deleteButton={
                  <ButtonAction
                    className={styleBtnDeleteTodo}
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
