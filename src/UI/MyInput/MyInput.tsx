import React from "react";
import styles from "./MyInput.module.scss";
const MyInput = (props: any) => {
  return <input {...props} className={styles.input} />;
};

export default MyInput;
