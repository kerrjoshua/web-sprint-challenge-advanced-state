// ❗ You don't need to add extra action creators to achieve MVP
import axios from 'axios'
import { 
  SET_INFO_MESSAGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  INPUT_CHANGE,
  RESET_FORM
} from './action-types'
import { newQuizURL, checkQuizURL, addQuizURL } from '../resources/apiURLs'

const newWheel = (wheel, newActive) => {
  return wheel.map((_, idx) => {
  return idx !== newActive ? 0 : 1;
})}
export function moveClockwise(active, wheel) {
  const newActive = active < 5 ? active + 1 : 0;
  return({type: MOVE_CLOCKWISE, payload: {newActive: newActive, newWheel: newWheel(wheel, newActive)}})
 }

export function moveCounterClockwise(active, wheel) { 
  const newActive = active > 0 ? active - 1 : 5 ;
  return({type: MOVE_COUNTERCLOCKWISE, payload: {newActive: newActive, newWheel: newWheel(wheel, newActive)}})
}

export function selectAnswer(index) {
  return({type: SET_SELECTED_ANSWER, payload: index})
 }

export function setMessage(msg) {
  return({type: SET_INFO_MESSAGE, payload: msg})
 }

export function setQuiz(quiz) {
  return({type: SET_QUIZ_INTO_STATE, payload: quiz}) }

export function inputChange() { 
}

export function resetForm() { 
  return({type:RESET_FORM})
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch({type:SET_QUIZ_INTO_STATE, payload:{quiz: {}, isLoading: true}})
    dispatch({type:SET_SELECTED_ANSWER, payload: null})
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get(newQuizURL)
      .then(res => dispatch({type:SET_QUIZ_INTO_STATE, payload:{quiz: res.data, isLoading: false}}))
      .catch(err => dispatch({type:SET_INFO_MESSAGE, payload: err.error}))
  }
}


export function postAnswer(answerID, quizID) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    
    
    axios.post(checkQuizURL, { "quiz_id": quizID, "answer_id": answerID })
      .then(res => dispatch({type:SET_INFO_MESSAGE, payload: res.data.message}))
      .catch(err => dispatch({type:SET_INFO_MESSAGE, payload:err.message}))
    // - Dispatch the fetching of the next quiz
    dispatch(fetchQuiz())
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
