import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createPoll } from '../store/actions'

class CreatePoll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      options: ['']
    }

    this.handleChange = this.handleChange.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }
  addAnswer() {
    this.setState({options: [...this.state.options,'']})
  }
  handleAnswer(evt, index) {
    const options = [...this.state.options]
    options[index] = evt.target.value
    this.setState({options})
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.createPoll(this.state)
    this.resetState()
  }
  resetState = () => {
    this.setState({ question: '' })
    this.setState({ options: ['']})
  }


  render() {
    const options = this.state.options.map((options, index) => (
      <Fragment key={index}>
        <label className='form-label'>
          options
        </label>
        <input 
          className='form-input'
          type='text'
          value={options}
          onChange={(evt) => this.handleAnswer(evt, index)}
        />
      </Fragment>
    ))


    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label className='form-label' htmlFor='question'> Question</label>
        <input 
          className='form-input'
          type='text' 
          name='question' 
          value={this.state.question} 
          onChange={this.handleChange} 
        />

        {options}
        <div className='button_center'>
          <button className='button' type='button' onClick={this.addAnswer}>Add Option</button>
          <button className='button' type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default connect(() => ({}), {createPoll})(CreatePoll)