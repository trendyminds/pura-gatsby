import React from "react";
import styles from "./index.module.css";

export default ({ heading, body }) => (
  <div className={styles.main}>
    <h2 className={styles.main__heading}>{heading}</h2>
    <p
      dangerouslySetInnerHTML={{ __html: body }}
      className={styles.main__body}
    />
  </div>
);
