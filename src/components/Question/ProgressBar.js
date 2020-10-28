import React from 'react'
import { useStateContext } from 'context/Provider';
import './ProgressBar.scss'

export default function ProgressBar() {
  const { currentQ } = useStateContext()
  return (
    <div className='progress-bar'>
      <div className='filler' style={{width: `${(currentQ + 1) * 10}%`}}/>
      <p>{currentQ + 1}/10</p>
    </div>
  )
}
