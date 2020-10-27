import React, { useState, useEffect } from 'react';
import { generateRandomArr } from 'helpers/generators';
import questions from 'data/questions.json';
import QuestionsMap from './QuestionsMap'
import './App.scss';

export default function App() {
  const [splashPage, setSplashPage] = useState(true)
  const [questionsArr, setQuestionsArr] = useState([])

  function handleSplash() {
    splashPage ? setSplashPage(false) : setSplashPage(true);
    setQuestionsArr(generateRandomArr(questions, 10));
  }

  useEffect(() => {
    console.log(questionsArr)
  }, [questionsArr])

  return (
    <div className="App">
      {splashPage && 
        <div>
          <h1>Ready to test your Tandem smarts??</h1>
          <button onClick={handleSplash}>Click here get quizzy!</button>
        </div>
      }
      {!splashPage &&
        <QuestionsMap questions={questionsArr}/>
      }
    </div>
  );
}