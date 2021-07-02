import React from 'react'
import Poll from '../components/Poll'
import ErrorMessage from '../components/errorMessages'


const Pollpage = ({ match, getPoll }) => {
  // const host = window.location.href
  getPoll(match.params.id)

  return (
    <div>
      <ErrorMessage/>
      <Poll/>
    </div>
  )
}

export default Pollpage