import React from 'react'
import styles from './Button.sass'

let Button = props => {
  const {onClick, text, className, theme = 'regular'} = props
  return (
    <button
      onClick={onClick}
      className={[styles.Button, styles[theme], className].join(' ')}
    >
      {text || 'Hello world!'}
    </button>
  )
}

export default Button
