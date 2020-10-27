import React, { useEffect } from 'react';
import './Question.scss';
import {generateAnswersKey} from 'helpers/generators'

export default function Question({question}) {
  
  function validate() {
    generateAnswersKey(question.incorrect, question.correct)
  }

  return (
    <div className='question'>
      <h2 className='q-title'>{question.question}</h2>
      <button className='q1' onClick={validate}>{question.correct}</button>
    </div>
  )
}
