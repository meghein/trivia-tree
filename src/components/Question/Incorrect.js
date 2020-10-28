import React from 'react';
import { useStateContext, useDispatchContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer'

export default function Incorrect() {
  const dispatch = useDispatchContext();
  const { answersKey } = useStateContext();

  const correctAnswer = Object.keys(answersKey).find(key => answersKey[key] === true);

  function handleNext() {
    dispatch({type: ACTION.CURRENT_Q, payload: 1})
    dispatch({type: ACTION.SCORE, payload: 0})
    dispatch({type: ACTION.RESULTS, payload: 'pending'})
  };

  return (
    <div>
      <h1>INCORRECT!</h1>
      <h4>(The correct answer was: {correctAnswer})</h4>
      <button onClick={handleNext}>Ready for the next question?</button>
    </div>
  )
};
