import React from "react";

import styles from "./SomeComponent.module.css";

const SomeComponent = ({ id }) => {
  return (
    <div className={styles.container}>
      <h1>{id}</h1>
      <p>ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default SomeComponent;
