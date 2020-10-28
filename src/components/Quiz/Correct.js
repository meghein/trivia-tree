import React from 'react';
import { useStateContext, useDispatchContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer'

export default function Correct() {
  const { currentQ } = useStateContext();
  const dispatch = useDispatchContext();

  function handleNext() {
    dispatch({type: ACTION.CURRENT_Q, payload: 1})
    dispatch({type: ACTION.SCORE, payload: 1})
    dispatch({type: ACTION.RESULTS, payload: 'pending'})
  };
  return (
    <div>
      <h1>CORRECT!</h1>
      {currentQ <= 8 &&
        <button onClick={handleNext}>Ready for the next question?</button>
      }
      {currentQ === 9 &&
        <button onClick={handleNext}>View Score!</button>
      }
    </div>
  )
};
