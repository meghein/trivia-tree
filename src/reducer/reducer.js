const ACTION = {
  CURRENT_Q: 'currentQ',
  RESULTS: 'results',
  SCORE: 'score',
}

export { ACTION }

export default function reducer(state, action) {
  switch(action.type) {
    case ACTION.CURRENT_Q:
      return({...state, currentQ: action.payload})
    case ACTION.RESULTS:
      return({...state, results: action.payload})
  }

}