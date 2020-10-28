import React from 'react'
import { useStateContext } from 'context/Provider'

export default function Incorrect() {
  const { answersKey } = useStateContext();
  const correctAnswer = Object.keys(answersKey).find(key => answersKey[key] === true)
  return (
    <div>
      <h1>INCORRECT!</h1>
      <h4>(The correct answer was: {correctAnswer})</h4>
    </div>
  )
}
