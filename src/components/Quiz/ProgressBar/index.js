import React, { useContext } from 'react';
import QuizProvider, { QuizContext } from 'context/Provider';
import './style.scss'

export default function ProgressBar() {
  const { state } = useContext(QuizContext)
  const { currentQ } = state
  return (
    <div className='progress-bar'>
      <div className='filler' style={{width: `${(currentQ + 1) * 10}%`}}/>
      <p>{currentQ + 1}/10</p>
    </div>
  )
}
