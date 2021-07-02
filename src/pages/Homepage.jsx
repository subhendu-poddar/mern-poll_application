import React from 'react';
import ErrorMessages from '../components/errorMessages';
import Polls from '../components/Polls'


const Homepage = props => (
  <div>
    <ErrorMessages />
    <Polls {...props}/>
  </div>
)

export default Homepage;