const ACTION = {
  CURRENT_Q: 'currentQ',
  SCORE: 'score',
}

export { ACTION }

export default function reducer(state, action) {
  switch(action.type) {
    case ACTION.CURRENT_Q:
      return({...state, currentQ: action.payload})
  }

}