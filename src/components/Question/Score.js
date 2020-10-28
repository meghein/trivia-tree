import React from 'react';
import { useStateContext } from 'context/Provider'

export default function Score() {
  const { score } = useStateContext()

  return (
    <div>
      <h1>Your score:</h1>
      <h2>{score}/10</h2>
      <button>play again?</button>
    </div>
  )
}
