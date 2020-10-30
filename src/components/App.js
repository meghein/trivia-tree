import React, { useState } from 'react';
import QuizProvider from 'context/Provider';
import questions from 'data/questions.json';
import { generateRandomArr } from 'helpers/generators';
import Quiz from './Quiz';
import Footer from './Footer';
import './App.scss';

export default function App() {
  const [splashPage, setSplashPage] = useState(true);
  const [questionsArr, setQuestionsArr] = useState([]);

  function handleSplash() {
    // toggle splash-page/quiz components:
    splashPage ? setSplashPage(false) : setSplashPage(true);

    // create round of 10 question from data store:
    setQuestionsArr(generateRandomArr(questions, 10));
  }

  return (
    <div className="App">
      <QuizProvider>
        {splashPage && 
          <div className='splash-page' data-testid="splash">
            <h1>Ready to Take the Tandem Test??</h1>
            <button data-testid="splash-button" onClick={handleSplash}>Click here to flex your smarts!</button>
          </div>
        }
        {!splashPage &&
          <Quiz questions={questionsArr} setQuestions={setQuestionsArr}/>
        }
        <Footer/>
      </QuizProvider>
    </div>
  );
}