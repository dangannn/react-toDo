import React from "react";
import { IOptions } from "../../types/types";
import styles from "./MySelect.module.scss";
interface ISelect {
  options: Array<IOptions>;
  defaultValue: string;
  value: string;
  onChange: any;
}

const MySelect = ({ options, defaultValue, value, onChange }: ISelect) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
