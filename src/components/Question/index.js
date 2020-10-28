import React from 'react';
import { useStateContext } from 'context/Provider';
import Answers from './Answers';
import Correct from './Correct';
import Incorrect from './Incorrect';
// import './Question.scss';

export default function Question({questions}) {
  const { currentQ, results } = useStateContext()
  
  return (
    <div className='question'>
      <h2 className='q-title'>{questions[currentQ].question}</h2>
      {results === 'pending' &&
        <Answers question={questions[currentQ]}/>
      }
      {results === 'correct' && <Correct/>}
      {results === 'incorrect' && <Incorrect/>}
    </div>
  )
}
