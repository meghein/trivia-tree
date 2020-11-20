const ACTIONS = {
  DATABASE: 'database',
  PAGE: 'page',
  QUESTIONS_ARR: 'quesionsArr'
}

export default function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.DATABASE:
      return({...state, database: action.payload})
    case ACTIONS.PAGE:
      return({...state, page: action.payload})
    case ACTIONS.QUESTIONS_ARR:
      return({...state, questionsArr: action.payload})
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export { ACTIONS }