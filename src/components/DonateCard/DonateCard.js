import React from 'react'
import styles from './DonateCard.sass'

import InfoBubble from 'components/InfoBubble'
import ProgressBar from 'components/ProgressBar'

let DonateCard = () => {
  return (
    <div className={styles.DonateCard}>
      <InfoBubble/>
      <div className={styles.box}>
        <ProgressBar/>
        <div className={styles.info}>
          <p>
            <em>Only 3 days left </em>
            to found this project.
          </p>
          <p>
            Join the <b>42</b> other donors who have already
            supported this project. Every dollar helps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DonateCard
