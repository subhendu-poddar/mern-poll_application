import React from 'react'
import { Redirect } from 'react-router'
import ErrorMessages from '../components/errorMessages'
import CreatePoll from '../components/CreatePoll' 


const CreatePollPage = ({ isAuthenticated }) => {
  if(!isAuthenticated) {
    return <Redirect to='/login'/>
  }

  return (
    <div>
      <ErrorMessages />
      <CreatePoll />
    </div>
  )

}

export default CreatePollPage