import React from 'react';
import { ACTION } from 'reducer/reducer';
import { useStateContext, useDispatchContext } from 'context/Provider'
import Question from './Question';

export default function QuestionsMap({questions}) {
  const state = useStateContext();
  const dispatch = useDispatchContext();

  console.log(state.currentQ)

  return (
    <div>
      {/* {questions.map((question, index) => {
        return <Question key={index} question={question}/>
      })} */}
      <Question question={questions[state.currentQ]}/>
    </div>
  )
}
