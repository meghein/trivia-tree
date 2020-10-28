import React, { useState } from 'react';
import { ACTION } from 'reducer/reducer';
import { useStateContext, useDispatchContext } from 'context/Provider'
// import './Question.scss';
import { generateRandomAnswers, generateAnswersKey } from 'helpers/generators';

export default function Question({question}) {
  // const [results, setResults] = useState('pending');
  const [answersKey, setAnswersKey] = useState({})
  const {results} = useStateContext()
  
  function validate(e) {
    const answers =(generateAnswersKey(question.correct, question.incorrect));
    setAnswersKey(answers);
    answers[e.target.value] === true ? setResults('correct') : setResults('incorrect');
  }

  return (
    <div className='question'>
      <h2 className='q-title'>{question.question}</h2>
      {results === 'pending' &&
        generateRandomAnswers(question.correct, question.incorrect).map((answer, index) =>{
          return <button key={`answer${index}`} onClick={validate} value={answer}>{answer}</button>
        })
      }
      {results === 'correct' &&
        <div>
          <h1>CORRECT!</h1>
        </div>
      }
      {results === 'incorrect' &&
        <div>
          <h1>INCORRECT!</h1>
          <h4>(The correct answer was: {Object.keys(answersKey).find(key => answersKey[key] === true)})</h4>
        </div>
      }
    </div>
  )
}
