// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { 
  SET_INFO_MESSAGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  INPUT_CHANGE,
  RESET_FORM
} from './action-types'

const initialWheelState = {
  wheel: [1,0,0,0,0,0], 
  active: 0
}
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
    case MOVE_COUNTERCLOCKWISE:
      
      return {
        ...state,
        wheel: action.payload.newWheel,
        active: action.payload.newActive
      }
    default:
      return state
  }
}

const initialQuizState = {
  quiz: null
}
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const initialSelectedAnswerState = {
  selectedAnswer: null
}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const initialMessageState = {
  message: ''
}
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    default:
      return state
    }
}

const rootReducer = combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })

export default rootReducer;
