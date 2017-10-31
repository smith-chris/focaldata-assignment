import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Main from 'views/Main'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
      </Switch>
    </Router>
  )
}

export default Routes
