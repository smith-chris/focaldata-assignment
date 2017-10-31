import React from 'react'
import styles from './DonateCard.sass'

import InfoBubble from 'components/InfoBubble'
import ProgressBar from 'components/ProgressBar'
import Input from 'components/Input'
import Button from 'components/Button'

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
          <div className={styles.donateContainer}>
            <Input
              className={styles.donateInput}
              type='number'
            />
            <Button
              className={styles.donateButton}
              text='Give Now'
            />
          </div>
          <a
            className={styles.link}
            href="#"
          >
            Why give $50?
          </a>
        </div>
      </div>
    </div>
  )
}

export default DonateCard
