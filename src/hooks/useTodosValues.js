import { useState, useEffect } from "react";
import { useStateRedux } from "./useStateRedux";
import * as actions from '../redux/actions/actions'
export const useTodosValues = () => {
  const { dispatch } = useStateRedux()
  const [todo, setTodo] = useState({ id: null, todo: "", isComplete: false });
  const [error, setError] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const getTodoList = actions.getTodosAction;
  
  useEffect(() => {
    setLoadingData(true);
    let savedState = JSON.parse(localStorage.getItem("todos"));

    if (!savedState) {
      setLoadingData(false);
      return;
    } else {
      dispatch(getTodoList(savedState));
      setLoadingData(false);
    }
  }, [dispatch, getTodoList]);

  return { todo, setTodo, error, setError, loadingData };
};
