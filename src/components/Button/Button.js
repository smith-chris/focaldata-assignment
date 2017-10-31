import React from 'react'
import styles from './Button.sass'

let Button = props => {
  const {onClick, text, className} = props
  return (
    <button
      onClick={onClick}
      className={[styles.Button, className].join(' ')}
    >
      {text || 'Hello world!'}
    </button>
  )
}

export default Button
