import React from "react";
import styles from "./SwitchComponent.module.css";

const SwitchComponent = ({ isOn, onToggle, onTitle, offTitle }) => {
  const handleToggle = () => {
    onToggle(!isOn);
  };

  return (
    <div className={styles.switchContainer}>
      <label className={styles.switch}>
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className={styles.slider}></span>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{onTitle}</div>
          <div className={styles.title}>{offTitle}</div>
        </div>
      </label>
    </div>
  );
};

export default SwitchComponent;
