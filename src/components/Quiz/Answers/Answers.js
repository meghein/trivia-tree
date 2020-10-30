import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuizContext } from 'context/Provider';
import { ACTION } from 'reducer/reducer';
import { generateRandomAnswers, generateAnswersKey } from 'helpers/generators';
import './style.scss';

export default function Answers({question}) {
  const { dispatch } = useContext(QuizContext);
  const choices = [];

  const answers = generateRandomAnswers(question.correct, question.incorrect).map((answer, index) =>{
    choices.push(answer);
    if (answer === question.correct) {
      return <button data-testid={`correct`} className={`answer a${index+1}`} key={`answer${index}`} onClick={validate} value={answer}>{answer}</button>
    } else {
      return <button data-testid={`incorrect${index+1}`} className={`answer a${index+1}`} key={`answer${index}`} onClick={validate} value={answer}>{answer}</button>
    }
  });

  function validate(e) {
    const answersKey = generateAnswersKey(question.correct, question.incorrect);
    dispatch({type: ACTION.ANSWERS_KEY, payload: answersKey})
    dispatch({type: ACTION.CHOICE, choice: e.target.value, answers: choices})
    answersKey[e.target.value] === true 
    ? dispatch({type: ACTION.RESULTS, payload: 'correct'})
    : dispatch({type: ACTION.RESULTS, payload: 'incorrect'});
  }

  return (
    <div className='choices'>
      {answers}
    </div>
  );
}

Answers.propTypes = {
  question: PropTypes.object,
};