import React, { createContext, useContext, useReducer } from 'react';
import reducer from 'reducer/reducer'
export const QuizContext = createContext();
// const DispatchContext = createContext();

// export function useStateContext() {
//   return useContext(StateContext)
// }

// export function useDispatchContext() {
//   return useContext(DispatchContext)
// }
export default function Provider({children}) {
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