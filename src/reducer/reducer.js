const ACTION = {
  SET_QUIZ: 'quiz',
  ANSWERS_KEY: 'answersKey',
  CURRENT_Q: 'currentQ',
  CHOICE: 'choice',
  RESULTS: 'results',
  SCORE: 'score',
  RESET: 'reset',
}

export { ACTION }

export default function reducer(state, action) {
  switch(action.type) {
    case ACTION.SET_QUIZ:
      return({...state, quiz: action.payload})
    case ACTION.ANSWERS_KEY:
      return({...state, answersKey: action.payload})
    case ACTION.CURRENT_Q: {
      let tempCurrent = state.currentQ
      tempCurrent += action.payload
      return({...state, currentQ: tempCurrent})
    }
    case ACTION.CHOICE:
      return({...state, options: action.answers, choice: action.choice})
    case ACTION.RESULTS:
      return({...state, results: action.payload})
    case ACTION.SCORE: {
      let tempScore = state.score
      tempScore += action.payload
      return({...state, score: tempScore})
    }
    case ACTION.RESET:
      return({
        ...state,
        answersKey: {},
        currentQ: 0,
        results: 'pending',
        score: 0,
      })
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );

  }

}