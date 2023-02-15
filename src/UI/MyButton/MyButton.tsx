import styles from "./MyButton.module.scss";

const MyButton = (props: any) => {
  return (
    <button className={styles.btn} {...props}>
      <span className={styles.btn__text}>{props.children}</span>
    </button>
  );
};

export default MyButton;
