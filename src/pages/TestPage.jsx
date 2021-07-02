import React from 'react';
import { withRouter } from 'react-router-dom'

import ErrorMessage from '../components/errorMessages';
import CreatePoll from '../components/CreatePoll'
import Auth from '../components/auth'
import Poll from '../components/Poll'
import Polls from '../components/Polls'


const TestPage = props => (
  <div>
    <ErrorMessage />
    <Auth/>
    <CreatePoll/>
    <Polls {...props}/>
    <Poll/>
  </div>
)

export default withRouter(TestPage);