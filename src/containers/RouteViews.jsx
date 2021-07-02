import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import CreatePoll from '../components/CreatePoll'
import AuthPage from '../pages/AuthPage'
import CreatePollPage from '../pages/CreatePollPage'
import Homepage from '../pages/Homepage'
import Pollpage from '../pages/Pollpage'
import TestPage from '../pages/TestPage'
import { getCurrentPoll } from '../store/actions'

const RouteViews = ({auth, getCurrentPoll}) => (    //({auth})
  <main>
    <Switch>
      <Route exact path='/' render={ props => <Homepage {...props}/>} />
      <Route 
        exact path='/login' 
        render={() => (
          <AuthPage 
            authType='login' 
            isAuthenticated={auth.isAuthenticated} 
          />
        )} />

      <Route 
        exact path='/register' 
        render={() => (
          <AuthPage 
            authType='register' 
            isAuthenticated={auth.isAuthenticated} 
          />
        )} 
      />
      <Route 
        exact path='/poll/new' 
        render={() => <CreatePollPage isAuthenticated={auth.isAuthenticated} /> } 
      />
      <Route 
        exact path='/poll/:id' 
        render={props => (
        <Pollpage getPoll={id => getCurrentPoll(id)} {...props} />
      )} />
      <Route 
        exact path="/test" 
        render={() => <TestPage />} 
      />
    </Switch>
  </main>
)

export default withRouter(connect(store=> ({auth: store.auth}), {getCurrentPoll})(RouteViews))
