import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuizContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer';
import questions from 'data/questions.json';
import { generateRandomArr } from 'helpers/generators';
import './style.scss';

export default function Score({setQuestions}) {
  const {state, dispatch } = useContext(QuizContext);
  const { score } = state;

  function resetQuiz() {
    setQuestions(generateRandomArr(questions, 10));
    dispatch({type: ACTION.RESET});
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
  setQuestions: PropTypes.func,
};
