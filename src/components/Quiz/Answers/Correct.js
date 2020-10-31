import React, { useContext } from 'react';
import { QuizContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer';
import { generateCorrect } from 'helpers/generators';
import './style.scss';

export default function Correct() {
  const { state, dispatch } = useContext(QuizContext);
  const { currentQ, options, answersKey, choice } = state;
  
  function handleNext() {
    dispatch({type: ACTION.CURRENT_Q, payload: 1})
    dispatch({type: ACTION.SCORE, payload: 1})
    dispatch({type: ACTION.RESULTS, payload: 'pending'})
  }

  const results = generateCorrect(options, answersKey, choice).map(option => {
    return option;
  });

  return (
    <div className='results'>
      {results}
      {currentQ <= 8 &&
        <div className='next'>
          <button data-testid='nextQ' onClick={handleNext}>Correct! Click here for the next question.</button>
        </div>
      }
      {currentQ === 9 &&
        <div className='next'>
          <button data-testid='nextQ' onClick={handleNext}>View score!</button>
        </div>
      }
    </div>
  );
}
