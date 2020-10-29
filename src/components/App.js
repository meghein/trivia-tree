import React, { useState } from 'react';
import { generateRandomArr } from 'helpers/generators';
import Provider from 'context/Provider';
import questions from 'data/questions.json';
import Quiz from './Quiz';
import Footer from './Footer';
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
          <div className='splash-page'>
            <h1>Ready to Take the Tandem Test??</h1>
            <button onClick={handleSplash}>Click here to flex your smarts!</button>
          </div>
        }
        {!splashPage &&
          <Quiz questions={questionsArr} setQuestions={setQuestionsArr}/>
        }
        <Footer/>
      </Provider>
    </div>
  );
};