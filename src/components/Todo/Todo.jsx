import classes from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleReminder } from "../../features/TodoSlice";

const Todo = ({ todo: { title, remainder, id } }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.Todo}>
      <div className={classes.top__title}>
        <p>{title}</p>
      </div>
      <div className={classes.todo__actions}>
        <button
          onClick={() => dispatch(deleteTodo(id))}
          className={`${classes.todo_delete} ${classes.btn}`}
        >
          Delete
        </button>
        <button
          onClick={() => dispatch(toggleReminder(id))}
          className={
            remainder
              ? `${classes.btn} ${classes.todo__remainder} ${classes.active}`
              : `${classes.btn} ${classes.todo__remainder}`
          }
        >
          dClick
        </button>
      </div>
    </div>
  );
};

export default Todo;
