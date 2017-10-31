import React from 'react'
import styles from './Input.sass'

let Input = props => {
  const {type = 'text'} = props
  return (
    <div className={styles.Input}>
      <input
        type={type}
        className={styles.element}
      />
    </div>
  )
}

export default Input
