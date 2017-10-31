import React from 'react'
import styles from './TextInput.sass'

let TextInput = props => {
  const {children} = props
  return (
    <div className={styles.TextInput}>
      {children}
    </div>
  )
}

export default TextInput
