import React, { useState } from 'react';
import Questions from './Questions'
import './App.scss';

export default function App() {
  const [splashPage, setSplashPage] = useState(true)

  function handleSplash() {
    splashPage ? setSplashPage(false) : setSplashPage(true)
  }

  return (
    <div className="App">
      {splashPage && 
        <div>
          <h1>Ready to test your Tandem smarts??</h1>
          <button onClick={handleSplash}>Click here get quizzy!</button>
        </div>
      }
      {!splashPage &&
        <Questions/>
      }
    </div>
  );
}