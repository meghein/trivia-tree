import React from 'react';
import { useStateContext, useDispatchContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer';
import './style.scss';

export default function Correct() {
  const { currentQ, resultsKey, answersKey, choice } = useStateContext();
  const dispatch = useDispatchContext();

  const results = resultsKey.map((option, index) => {
    if (option === choice && answersKey[choice]) {
      return (
        <li
          key={index}
          className={`opt${index +1}`}
          style={{backgroundColor: 'green'}}
        >
          {option}
        </li>
      )
    } else if (option === choice && !answersKey[choice]) {
      return (
        <li
          key={index}
          className={`opt${index +1}`}
          style={{backgroundColor: 'red'}}
        >
          {option}
        </li>
      )
    } else {
      return <li key={index} className={`opt${index +1}`}>{option}</li>
    }
  })

  function handleNext() {
    dispatch({type: ACTION.CURRENT_Q, payload: 1})
    dispatch({type: ACTION.SCORE, payload: 1})
    dispatch({type: ACTION.RESULTS, payload: 'pending'})
  };
  return (
    <div className='results'>
      <h1>CORRECT!</h1>
      <ul>{results}</ul>
      {currentQ <= 8 &&
        <button onClick={handleNext}>Ready for the next question?</button>
      }
      {currentQ === 9 &&
        <button onClick={handleNext}>View Score!</button>
      }
    </div>
  )
};
