import React from 'react'
import styles from './InfoBubble.sass'

let InfoBubble = () => {
  return (
    <div className={styles.InfoBubble}>
      <div className={styles.text}>
        <b>$167</b> still needed for this project
      </div>
    </div>
  )
}

export default InfoBubble
