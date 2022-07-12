import classes from "./Button.module.css";

const Button = ({ text, type }) => {
  return (
    <button type={type} className={classes.button}>
      {text}
    </button>
  );
};

export default Button;
