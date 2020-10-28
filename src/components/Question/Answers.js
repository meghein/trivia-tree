import React from 'react';
import { ACTION } from 'reducer/reducer';
import { useDispatchContext } from 'context/Provider'
import { generateRandomAnswers, generateAnswersKey } from 'helpers/generators';


export default function Answers({question}) {
  const dispatch = useDispatchContext()

  const answers = generateRandomAnswers(question.correct, question.incorrect).map((answer, index) =>{
    return <button key={`answer${index}`} onClick={validate} value={answer}>{answer}</button>
  })

  function validate(e) {
    const answers = generateAnswersKey(question.correct, question.incorrect);
    dispatch({type: ACTION.ANSWERS_KEY, payload: answers})
    answers[e.target.value] === true 
    ? dispatch({type: ACTION.RESULTS, payload: 'correct'})
    : dispatch({type: ACTION.RESULTS, payload: 'incorrect'});
  }

  return (
    <div>
      {answers}
    </div>
  )
}
