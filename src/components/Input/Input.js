import React from 'react'
import styles from './Input.sass'

let Input = props => {
  const {type = 'text', className} = props
  return (
    <div className={[styles.Input, className].join(' ')}>
      <input
        type={type}
        placeholder='50'
        className={styles.element}
      />
    </div>
  )
}

export default Input
