import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { postQuiz } from '../state/action-creators'

export function Form(props) {

  const [ newQuiz, setNewQuiz ] = useState({newQuestion: '', newTrueAnswer: '', newFalseAnswer: ''})

  const { newQuestion, newTrueAnswer, newFalseAnswer } = newQuiz;

  const onChange = evt => {
    setNewQuiz ({...newQuiz, [evt.target.id]: evt.target.value})
  }

  const disabled = !(newQuestion.trim.length > 0 || newTrueAnswer.trim.length > 0 || newFalseAnswer.trim.length > 0)

  const onSubmit = evt => {
    evt.preventDefault;
    props.postQuiz(newQuiz)
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



export default connect(null, {postQuiz})(Form)
