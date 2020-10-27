import React from 'react';
import './Question.scss';

export default function Question({question, number}) {
  return (
    <div className='question'>
      <h2 className='q-title'>{question.question}</h2>
      {/* <button className='q1'></button> */}
    </div>
  )
}
