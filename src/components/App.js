import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizProvider from 'context/Provider';
// import questions from 'data/questions.json';
import { generateRandomArr } from 'helpers/generators';
import Quiz from './Quiz';
import Footer from './Footer';
import './App.scss';

export default function App() {
  const [database, setDatabase] = useState('')
  const [page, setPage] = useState('initial');
  const [questionsArr, setQuestionsArr] = useState([]);

  useEffect(() => {
    const animal = axios.get(`https://opentdb.com/api.php?amount=50&category=27&type=multiple`);
    const general = axios.get(`https://opentdb.com/api.php?amount=50&category=9&type=multiple`);
    const myth = axios.get(`https://opentdb.com/api.php?amount=50&type=multiple`);
    const science = axios.get(`https://opentdb.com/api.php?amount=50&category=17&type=multiple`)
    const geography = axios.get(`https://opentdb.com/api.php?amount=50&category=22&type=multiple`)
    const art = axios.get(`https://opentdb.com/api.php?amount=23&category=25&type=multiple`)
    const cartoon = axios.get(`https://opentdb.com/api.php?amount=50&category=32&type=multiple`)
    const history = axios.get(`https://opentdb.com/api.php?amount=50&category=23&type=multiple`)
    const film = axios.get(`https://opentdb.com/api.php?amount=50&category=11&type=multiple`)
    const music = axios.get(`https://opentdb.com/api.php?amount=50&category=12&type=multiple`)
    Promise.all([animal, general, myth, science, geography, art, cartoon, history, film, music]).then(all => {
      console.log("categories:", all)
      setDatabase({
        animal: all[0].data.results,
        general: all[1].data.results,
        myth: all[2].data.results,
        science: all[3].data.results,
        geography: all[4].data.results,
        art: all[5].data.results,
        cartoon: all[6].data.results,
        history: all[7].data.results,
        film: all[8].data.results,
        music: all[9].data.results,
      })
      setPage('splash')
    });
  }, [])

  function handleSplash(e) {
    // toggle splash-page/quiz components:
    setPage('quiz');

    // create round of 10 question from data store:
    setQuestionsArr(generateRandomArr(database[e.target.value], 10));
  }

  return (
    <div className='App'>
      <QuizProvider>
        {page === 'initial' &&
          <div>
            <h1>Welcome to Trivia Tree!</h1>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        }
        {page === 'splash' && 
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
        {page === 'quiz' &&
          <Quiz
            questions={questionsArr}
            setPage={setPage}
          />
        }
        <Footer/>
      </QuizProvider>
    </div>
  );
}