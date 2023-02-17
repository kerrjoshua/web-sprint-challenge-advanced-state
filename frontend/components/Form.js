import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { postQuiz, inputChange } from '../state/action-creators'

export function Form(props) {


  const { newQuestion, newTrueAnswer, newFalseAnswer } = props.newQuiz;


  const onChange = evt => {
    props.inputChange(evt, props.pstate)
  }

  const disabled = (newQuestion.trim().length < 1|| newTrueAnswer.trim().length < 1 || newFalseAnswer.trim().length < 1)

  const onSubmit = evt => {
    evt.preventDefault();
    props.postQuiz(props.newQuiz)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={newFalseAnswer}/>
      <button id="submitNewQuizBtn" disabled={disabled}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuiz: {
      newQuestion: state.form.newQuestion,
      newTrueAnswer: state.form.newTrueAnswer,
      newFalseAnswer: state.form.newFalseAnswer
    }
      
    }
  
}

export default connect(mapStateToProps, {postQuiz, inputChange})(Form)
