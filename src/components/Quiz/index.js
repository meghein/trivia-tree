import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuizContext } from 'context/Provider';
import Answers from './Answers/Answers';
import Correct from './Answers/Correct';
import Incorrect from './Answers/Incorrect';
import ProgressBar from './ProgressBar';
import Score from './Score';
import './style.scss';

export default function Quiz({questions, setQuestions, database}) {
  const { state } = useContext(QuizContext);
  const { currentQ, results } = state;

  return (
    <>
      {currentQ <= 9 &&
        <div id='quiz' data-testid='quiz'>
        <h2 className='q-title'>{questions[currentQ].question}</h2>
        {results === 'pending' &&
          <Answers question={questions[currentQ]}/>
        }
        {results === 'correct' && <Correct/>}
        {results === 'incorrect' && <Incorrect/>}
        <ProgressBar/>
        </div>
      }
      {currentQ === 10 &&
        <Score
          setQuestions={setQuestions}
          database={database}
        />
      }
    </>
  );
}

Quiz.propTypes = {
  questions: PropTypes.array,
  setQuestions: PropTypes.func,
  database: PropTypes.object
};
