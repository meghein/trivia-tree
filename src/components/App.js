import React from 'react';
import useData from 'hooks/useData';
import QuizProvider from 'context/Provider';
import { generateRandomArr } from 'helpers/generators';
import Quiz from './Quiz';
import Footer from './Footer';
import './App.scss';

export default function App() {
  const { categories, state, setPage, setQuestionsArr } = useData();

  function handleSplash(e) {
    // toggle splash-page/quiz components:
    setPage('quiz');

    // create round of 10 question from data store:
    setQuestionsArr(generateRandomArr(state.database[e.target.value], 10));
  }
  return (
    <div className='App'>
      <QuizProvider>
        {state.page === 'initial' &&
          <div>
            <h1>Welcome to Trivia Tree!</h1>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        }
        {state.page === 'splash' && 
          <div className='splash-page' data-testid='splash'>
            <h1>Test your smarts with one of these categories:</h1>
            <div id='categories'>
              {Object.entries(categories).map(([target, category], index) => {
                return <button data-testid='splash-button' onClick={handleSplash} value={target} key={index}>{category}</button>
              })}
            </div>
            <p>All questions courtesy of <a href='https://opentdb.com/' target='_blank' rel='noreferrer'>Open Trivia Database</a></p>
          </div>
        }
        {state.page === 'quiz' &&
          <Quiz
            questions={state.questionsArr}
            setPage={setPage}
          />
        }
        <Footer/>
      </QuizProvider>
    </div>
  );
}