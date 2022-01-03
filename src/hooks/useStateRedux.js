import { useDispatch, useSelector } from "react-redux";

export const useStateRedux = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);
  return { dispatch, todos };
};
