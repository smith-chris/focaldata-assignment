import React from 'react'
import styles from './ProgressBar.sass'

let ProgressBar = () => {
  return (
    <div className={styles.ProgressBar}>
      <div
        className={styles.bar}
        style={{width: `${75}%`}}
      />
    </div>
  )
}

export default ProgressBar
