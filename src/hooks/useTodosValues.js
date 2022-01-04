import { useState, useEffect } from "react";
import { useStateRedux } from "./useStateRedux";
import * as actions from '../redux/actions/actions'
export const useTodosValues = () => {
  const { dispatch } = useStateRedux()
  const [todo, setTodo] = useState({ id: null, todo: "", isComplete: false });
  const [error, setError] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [indexTodo, setIndexTodo] = useState(0)
  const getTodoList = actions.getTodosAction;
  
  useEffect(() => {
    setLoadingData(true);
    let savedState = JSON.parse(localStorage.getItem("todos"));
    let index = JSON.parse(localStorage.getItem('indexTodo'))
    index++
    index === null ? setIndexTodo(0) : setIndexTodo(index)
    
    if (!savedState) {
      setLoadingData(false);
      return;
    } else {
      dispatch(getTodoList(savedState));
      setLoadingData(false);
    }
  }, [dispatch, getTodoList, indexTodo]);

  return { todo, setTodo, error, setError, loadingData, indexTodo, setIndexTodo };
};
