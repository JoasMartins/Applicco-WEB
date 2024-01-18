import React from "react";
import styles from "./css/Badge.module.css"

export default function Badge({ text }) {
    return <div className={styles.Badge}>
        <p>{text}</p>
    </div>
}