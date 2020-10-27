import React from 'react';
import Question from './Question';

export default function QuestionsMap({questions}) {
  return (
    <div>
      {questions.map((question, index) => {
        return <Question key={index} question={question}/>
      })}
    </div>
  )
}
