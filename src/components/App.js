import React from 'react';
import useData from 'hooks/useData';
import QuizProvider from 'context/Provider';
import { generateRandomArr } from 'helpers/generators';
import Quiz from './Quiz';
import Footer from './Footer';
import './App.scss';

export default function App() {
  const { state, setPage, setQuestionsArr } = useData();

  function handleSplash(e) {
    // toggle splash-page/quiz components:
    setPage('quiz');

    // create round of 10 question from data store:
    setQuestionsArr(generateRandomArr(state.database[e.target.value], 10));
  }

  console.log(state);
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
            <button data-testid='splash-button' onClick={handleSplash} value='general'>General Knowledge</button>
            <button data-testid='splash-button' onClick={handleSplash} value='animal'>Animal Kingdom</button>
            <button data-testid='splash-button' onClick={handleSplash} value='myth'>Mythology</button>
            <button data-testid='splash-button' onClick={handleSplash} value='science'>Science &#38; Nature</button>
            <button data-testid='splash-button' onClick={handleSplash} value='geography'>Geography</button>
            <button data-testid='splash-button' onClick={handleSplash} value='art'>Art</button>
            <button data-testid='splash-button' onClick={handleSplash} value='cartoon'>Cartoon &#38; Animations</button>
            <button data-testid='splash-button' onClick={handleSplash} value='history'>History</button>
            <button data-testid='splash-button' onClick={handleSplash} value='film'>Film</button>
            <button data-testid='splash-button' onClick={handleSplash} value='music'>Music</button>
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