import React from "react";
import useCount from "../../hooks/useCount";
import styles from "../Counter/Counter.module.scss";
import MyButton from "../../UI/MyButton/MyButton";
function Counter({ totalStars = 5 }) {
  const { counter, decrement, increment } = useCount(0);
  return (
    <>
      <h2 className={styles.counter__title}>Counter</h2>
      <MyButton onClick={decrement}>-</MyButton>
      <span className={styles.counter}>{counter}</span>
      <MyButton onClick={increment}>+</MyButton>
    </>
  );
}

export default Counter;
