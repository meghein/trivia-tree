const ACTION = {
  DATABASE: 'database',
  PAGE: 'page',
  QUESTIONS_ARR: 'quesionsArr'
}

export default function reducer(state, action) {
  switch(action.type) {
    case ACTION.DATABASE:
      return({...state, database: action.payload})
    case ACTION.PAGE:
      return({...state, page: action.payload})
    case ACTION.QUESTIONS_ARR:
      return({...state, questionsArr: action.payload})
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export { ACTION }