import {
  generateAnswersKey,
  generateCorrect,
  generateIncorrect,
  generateRandomAnswers,
  generateRandomArr
} from './generators';

import questions from 'data/questions.json';

/* 
SINGLE QUESTION FOR REFERENCE:
const question = {
  'question': 'What was Tandem previous name?',
  'incorrect': ['Tandem', 'Burger Shack', 'Extraordinary Humans'],
  'correct': 'Devmynd'
}
*/

const choices = ['Tandem', 'Burger Shack', 'Extraordinary Humans', 'Devmynd'];
const correctChoice = 'Devmynd';
const incorrectChoice = 'Burger Shack';
const answers = {
  'Tandem': false,
  'Burger Shack': false,
  'Extraordinary Humans': false,
  'Devmynd': true
};

test('generateAnswersKey should return an object', () => {
  const result = generateAnswersKey(questions[0].correct, questions[0].incorrect);
  expect(result).toBeInstanceOf(Object);
});

test('generateAnswersKey should contain the correct and incorrect answers as keys', () => {
  const result = generateAnswersKey(questions[0].correct, questions[0].incorrect);
  expect(Object.keys(result)).toHaveLength(4);
  expect(Object.keys(result).includes('Devmynd')).toBe(true);
});

test('generateAnswersKey should contain true/false as values', () => {
  const result = generateAnswersKey(questions[0].correct, questions[0].incorrect);
  expect(result['Devmynd']).toBeTruthy();
  expect(result['Burger Shack']).toBeFalsy();
});

test('generateCorrect should return an array', () => {
  const result = generateCorrect(choices, answers, correctChoice);
  expect(result).toBeInstanceOf(Array);
});

test('generateCorrect should return a "correct" button', () => {
  const result = generateCorrect(choices, answers, correctChoice);
  const correct = (<button key='3' className='option opt4' style={{backgroundColor: '#6A994E'}}>Devmynd</button>);

  expect(result[3]).toMatchObject(correct);
});

test('generateIncorrect should return an array', () => {
  const result = generateIncorrect(choices, answers, correctChoice);
  expect(result).toBeInstanceOf(Array);
});

test('generateIncorrect should return a "incorrect" button', () => {
  const result = generateIncorrect(choices, answers, incorrectChoice);
  const incorrect = (<button key='1' className='option opt2' style={{backgroundColor: '#DD6E429D'}}>Burger Shack</button>);

  expect(result[1]).toMatchObject(incorrect);
});

test('generateIncorrect should return a "correct" button', () => {
  const result = generateIncorrect(choices, answers, incorrectChoice);
  const correct = (<button key='3' className='option opt4' style={{backgroundColor: '#6A994E'}}>Devmynd</button>);

  expect(result[3]).toMatchObject(correct);
});

test('generateRandomAnswers should return an array with a length of 4', () => {
  const result = generateRandomAnswers(questions[0].correct, questions[0].incorrect);
  expect(result).toBeInstanceOf(Array);
  expect(result).toHaveLength(4);
});

test('generateRandomArr should return an array with a length of 10', () => {
  const result = generateRandomArr(questions, 10);
  expect(result).toBeInstanceOf(Array);
  expect(result).toHaveLength(10);
});
