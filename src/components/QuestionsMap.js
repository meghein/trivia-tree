import React from 'react';
import { useStateContext } from 'context/Provider'
import Question from './Question';

export default function QuestionsMap({questions}) {
  const { currentQ } = useStateContext();

  return (
    <div>
      <Question question={questions[currentQ]}/>
    </div>
  )
}
