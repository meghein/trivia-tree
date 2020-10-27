import React, { useState } from 'react';
// import './Question.scss';
import { generateRandomAnswers, generateAnswersKey } from 'helpers/generators';

export default function Question({question}) {
  const [results, setResults] = useState('pending')
  
  function validate(e) {
    console.log(e.target.value)
    const answersKey = (generateAnswersKey(question.correct, question.incorrect))
    answersKey[e.target.value] === true ? setResults('correct') : setResults('incorrect')
  }

  return (
    <div className='question'>
      {results === 'pending' &&
        <div>
          <h2 className='q-title'>{question.question}</h2>
          {generateRandomAnswers(question.correct, question.incorrect).map((answer, index) =>{
            return <button key={`answer${index}`} onClick={validate} value={answer}>{answer}</button>
          })}
      </div>
      }
      {results === 'correct' &&
        <div>
          <h1>CORRECT!</h1>
        </div>
      }
      {results === 'incorrect' &&
        <div>
          <h1>INCORRECT!</h1>
        </div>
      }
    </div>
  )
}
