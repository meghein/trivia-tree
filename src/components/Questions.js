import React from 'react';
import questions from 'data/questions.json';
import { generateRandomArr } from 'helpers/generators'

export default function Questions() {



function logJSON() {
  generateRandomArr(questions, 10)
}


  return (
    <div>
      <button onClick={logJSON}>log JSON</button>
    </div>
  )
}
