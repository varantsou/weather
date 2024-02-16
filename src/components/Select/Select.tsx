import { useState } from "react";

import styles from "./Select.module.css";

export function Select({ options, onChange, value }) {
  const [selectedValue, setSelectedValue] = useState<string>(value);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={styles.selectContainer}>
      <select
        value={selectedValue}
        onChange={handleChange}
        className={styles.customSelect}
      >
        <option value="">Выберите опцию</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
