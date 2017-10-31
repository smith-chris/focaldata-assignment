import React from 'react'
import styles from './ProgressBar.sass'

let ProgressBar = props => {
  const {children} = props
  return (
    <div className={styles.ProgressBar}>
      {children}
    </div>
  )
}

export default ProgressBar
