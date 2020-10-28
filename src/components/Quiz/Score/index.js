import React from 'react';
import { useStateContext, useDispatchContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer'
import questions from 'data/questions.json';
import { generateRandomArr } from 'helpers/generators';
import './style.scss';

export default function Score({setQuestions}) {
  const dispatch = useDispatchContext()
  const { score } = useStateContext()

  function resetQuiz() {
    setQuestions(generateRandomArr(questions, 10))
    dispatch({type: ACTION.RESET})
  }

  return (
    <div id='score'>
      <div className='stats'></div>
      <h1>Your score:</h1>
      <h2>{score}/10</h2>
      <button className='play-again' onClick={resetQuiz}>play again?</button>
    </div>
  )
}
