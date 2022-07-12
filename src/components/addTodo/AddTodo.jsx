import classes from "./AddTodo.module.css";
import Button from "../button/Button";
import Input from "../input/Input";
import { addTodo } from "../../features/TodoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [remainder, setRemainder] = useState(false);
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      alert("Plese fill in your todo");
    }

    const newTodo = {
      id: Math.random(),
      title: todoText,
      remainder
    };

    dispatch(addTodo(newTodo));

    setTodoText("");
    setRemainder(false);
  };

  const getTodoText = (text) => {
    setTodoText(text);
  };

  return (
    <section className={classes.section}>
      <form onSubmit={submitTodo}>
        <div>
          <Input
            value={todoText}
            type="text"
            placeholder="Enter todo"
            getTodo={getTodoText}
          />
          <Button text="Add Todo" type="submit" />
        </div>
        <div className={classes.remainder__label}>
          <input
            type="checkbox"
            id="remainder"
            onChange={() => setRemainder(!remainder)}
          />
          <label htmlFor="remainder">Set remainder for this todos</label>
        </div>
      </form>
    </section>
  );
};

export default AddTodo;
