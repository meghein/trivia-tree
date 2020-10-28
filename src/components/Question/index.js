import React from 'react';
import { useStateContext } from 'context/Provider';
import Answers from './Answers';
import Correct from './Correct';
import Incorrect from './Incorrect';
import Score from './Score';
// import './Question.scss';

export default function Question({questions, setQuestions}) {
  const { currentQ, results } = useStateContext()

  return (
    <>
      {currentQ <= 9 &&
        <div className='quiz'>
        <h2 className='q-title'>{questions[currentQ].question}</h2>
        {results === 'pending' &&
          <Answers question={questions[currentQ]}/>
        }
        {results === 'correct' && <Correct/>}
        {results === 'incorrect' && <Incorrect/>}
        </div>
      }
      {currentQ === 10 &&
        <Score setQuestions={setQuestions}/>
      }
    </>
  )
}
