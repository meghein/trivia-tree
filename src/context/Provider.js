import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from 'reducers/quiz';
export const QuizContext = createContext();

export default function QuizProvider({children}) {
  const [state, dispatch] = useReducer(reducer, {
    quiz: [],
    answersKey: {},
    currentQ: 0,
    options: [],
    choice: '',
    results: 'pending',
    score: 0,

  })
  return (
    <QuizContext.Provider value={{state, dispatch}}>
      {children}
    </QuizContext.Provider>
  )
}

QuizProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired
}