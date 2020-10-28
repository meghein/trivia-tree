import React from 'react';
import { useStateContext } from 'context/Provider';
import Answers from './Answers';
import Correct from './Correct';
import Incorrect from './Incorrect';
import ProgressBar from './ProgressBar';
import Score from './Score';
// import './Quiz.scss';

export default function Quiz({questions, setQuestions}) {
  const { currentQ, results } = useStateContext()

  return (
    <>
      {currentQ <= 9 &&
        <div className='quiz'>
        <h1>Question {currentQ + 1}:</h1>
        <h2 className='q-title'>{questions[currentQ].question}</h2>
        {results === 'pending' &&
          <Answers question={questions[currentQ]}/>
        }
        {results === 'correct' && <Correct/>}
        {results === 'incorrect' && <Incorrect/>}
        <ProgressBar/>
        </div>
      }
      {currentQ === 10 &&
        <Score setQuestions={setQuestions}/>
      }
    </>
  )
}
