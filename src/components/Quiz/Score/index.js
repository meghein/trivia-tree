import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuizContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer';
// import questions from 'data/questions.json';
// import { generateRandomArr } from 'helpers/generators';
import './style.scss';

export default function Score({setPage}) {
  const {state, dispatch } = useContext(QuizContext);
  const { score } = state;

  function resetQuiz() {
    // setQuestions(generateRandomArr(database[e.target.value], 10));
    dispatch({type: ACTION.RESET});
    setPage('splash')
  }

  return (
    <div id='score' data-testid='score'>
      <div className='stats'></div>
      <h1>Your score:</h1>
      <h2>{score}/10</h2>
      <button data-testid='play-again' className='play-again' onClick={resetQuiz}>play again?</button>
    </div>
  );
}

Score.propTypes = {
  setPage: PropTypes.func,
};
