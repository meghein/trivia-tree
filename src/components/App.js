import React, { useState } from 'react';
import { generateRandomArr } from 'helpers/generators';
import Provider from 'context/Provider';
import questions from 'data/questions.json';
import Question from './Question'
import './App.scss';

export default function App() {
  const [splashPage, setSplashPage] = useState(true)
  const [questionsArr, setQuestionsArr] = useState([])

  function handleSplash() {
    splashPage ? setSplashPage(false) : setSplashPage(true);
    setQuestionsArr(generateRandomArr(questions, 10));
  }

  return (
    <div className="App">
      <Provider>
      {splashPage && 
        <div>
          <h1>Ready to test your Tandem smarts??</h1>
          <button onClick={handleSplash}>Click here get quizzy!</button>
        </div>
      }
      {!splashPage &&
        <Question questions={questionsArr}/>
      }
      </Provider>
    </div>
  );
}