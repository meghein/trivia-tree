import React from 'react';
import { useStateContext, useDispatchContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer';
import { generateCorrect } from 'helpers/generators';
import './style.scss';

export default function Correct() {
  const { currentQ, resultsKey, answersKey, choice } = useStateContext();
  const dispatch = useDispatchContext();

  function handleNext() {
    dispatch({type: ACTION.CURRENT_Q, payload: 1})
    dispatch({type: ACTION.SCORE, payload: 1})
    dispatch({type: ACTION.RESULTS, payload: 'pending'})
  };

  const results = generateCorrect(resultsKey, answersKey, choice).map(option => {
    return option;
  })

  return (
    <div className='results'>
      {results}
      {currentQ <= 8 &&
        <div className='next'>
          <button onClick={handleNext}>Ready for the next question?</button>
        </div>
      }
      {currentQ === 9 &&
        <div className='next'>
          <button onClick={handleNext}>View score!</button>
        </div>
      }
    </div>

  )
};
