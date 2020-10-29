import React from 'react';
import { useStateContext, useDispatchContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer';
import { generateIncorrect } from 'helpers/generators';
import './style.scss';

export default function Incorrect() {
  const dispatch = useDispatchContext();
  const { answersKey, currentQ, resultsKey, choice } = useStateContext();

  const correctAnswer = Object.keys(answersKey).find(key => answersKey[key] === true);

  function handleNext() {
    dispatch({type: ACTION.CURRENT_Q, payload: 1})
    dispatch({type: ACTION.SCORE, payload: 0})
    dispatch({type: ACTION.RESULTS, payload: 'pending'})
  };

  const results = generateIncorrect(resultsKey, answersKey, choice).map(option => {
    return option;
  })

  return (
    <>
      <div className='results'>{results}</div>
      {currentQ <= 8 &&
        <div className='next'>
          <h1>X</h1>
          <button onClick={handleNext}>Ready for the next question?</button>
          <h4>(The correct answer was: {correctAnswer})</h4>
        </div>
      }
      {currentQ === 9 &&
        <div className='next'>
          <h1>X</h1>
          <button onClick={handleNext}>View score!</button>
        </div>
      }
    </>
  )
};
