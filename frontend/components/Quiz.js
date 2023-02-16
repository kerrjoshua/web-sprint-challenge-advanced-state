import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { data } from '../data'
import { setQuiz, selectAnswer, fetchQuiz, postAnswer } from '../state/action-creators'


function Quiz(props) {

  useEffect(() => {
    props.fetchQuiz()},[])
  console.log(props)
  const { selected } = props;
  const disabled = selected === null;
  const handleClick = id => props.selectAnswer(id);
  const handleSubmit = e => {
    e.preventDefault();
    props.postAnswer(props.selected, props.quiz.quiz_id)
  }
  return (
    <div id="wrapper">
      {
        !props.isLoading ? (
          <>
            <h2>{props.quiz.question}</h2>



            <div id="quizAnswers">

              {props.quiz.answers.map((answer, i) => {
                console.log(answer.answer_id)
                const isSelected = selected === answer.answer_id;
                return (
                  <div className={`answer ${isSelected ? "selected" : ""}`} key={answer.answer_id}>
                    {answer.text}
                    <button onClick ={() => handleClick(answer.answer_id)}>
                      {`${isSelected ? "SELECTED" : "Select"}`}
                    </button>
                  </div>
                )
              })}

            </div>

            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={disabled}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz.quiz,
    selected: state.selectedAnswer.selectedAnswer,
    isLoading: state.quiz.isLoading
  }
}

export default connect(mapStateToProps, { setQuiz, selectAnswer, fetchQuiz, postAnswer })(Quiz)
