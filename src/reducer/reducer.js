const ACTION = {
  ANSWERS_KEY: 'answersKey',
  CURRENT_Q: 'currentQ',
  RESULTS: 'results',
  SCORE: 'score',
}

export { ACTION }

export default function reducer(state, action) {
  switch(action.type) {
    case ACTION.ANSWERS_KEY:
      return({...state, answersKey: action.payload})
    case ACTION.CURRENT_Q:
      let tempCurrent = state.currentQ
      tempCurrent += action.payload
      return({...state, currentQ: tempCurrent})
    case ACTION.RESULTS:
      return({...state, results: action.payload})
    case ACTION.SCORE:
      let tempScore = state.score
      tempScore += action.payload
      console.log(state)
      return({...state, score: tempScore})
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );

  }

}