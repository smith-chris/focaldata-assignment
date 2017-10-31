import React from 'react'
import styles from './Button.sass'

let Button = props => {
  const {onClick, text} = props
  return (
    <button
      onClick={onClick}
      className={styles.Button}
    >
      {text || 'Hello world!'}
    </button>
  )
}

export default Button
