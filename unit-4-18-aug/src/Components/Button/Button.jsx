import React from "react"
import styles from './Button.module.css'

export default function Button({ label, onClick }) {
    return (
        <div data-testid="btn" onClick={onClick} className={styles.container}>
                {label}
        </div>
    )
}