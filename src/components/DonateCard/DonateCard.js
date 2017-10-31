import React from 'react'
import styles from './DonateCard.sass'

import InfoBubble from 'components/InfoBubble'

let DonateCard = props => {
  const {children} = props
  return (
    <div className={styles.DonateCard}>
      <InfoBubble/>
      {children}
    </div>
  )
}

export default DonateCard
