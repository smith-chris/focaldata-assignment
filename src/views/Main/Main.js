import React from 'react'
import {connect} from 'react-redux'
import styles from './Main.sass'

import DonateCard from 'components/DonateCard'

import {
  incrementCounter,
  decrementCounter
} from 'store/actions/counterActions'

const Main = () => {
  return (
    <div className={styles.main}>
      <DonateCard/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
