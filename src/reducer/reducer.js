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
      return({...state, currentQ: action.payload})
    case ACTION.RESULTS:
      return({...state, results: action.payload})
  }

}