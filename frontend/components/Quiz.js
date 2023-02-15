import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { data } from '../data'
import { setQuiz } from '../state/action-creators'


function Quiz(props) {

  props.setQuiz(data)
  const { question, answers } = props.quiz;
  const { selected } = props;
  const disabled = selected === null;
  return (
    <div id="wrapper">
      {
        props.quiz ? (
          <>
            <h2>{question}</h2>



            <div id="quizAnswers">

              {answers.map((answer, i) => {
                const isSelected = selected === i;
                return (
                  <div className={`answer ${isSelected ? "selected" : ""}`} key={i}>
                    {answers[i].text}
                    <button >
                      {`${isSelected ? "SELECTED" : "Select"}`}
                    </button>
                  </div>
                )
              })}

            </div>

            <button id="submitAnswerBtn" disabled={disabled}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz.quiz,
    selected: state.selectedAnswer.selectedAnswer
  }
}

export default connect(mapStateToProps, { setQuiz })(Quiz)
