import { generateAnswersKey, generateCorrect, generateIncorrect, generateRandomAnswers, generateRandomArr} from './generators';
import questions from 'data/questions.json';

/* 
SINGLE QUESTION FOR REFERENCE:
const question = {
  'question': 'What was Tandem previous name?',
  'incorrect': ['Tandem', 'Burger Shack', 'Extraordinary Humans'],
  'correct': 'Devmynd'
}
*/
const choices = ['Tandem', 'Burger Shack', 'Extraordinary Humans', 'Devmynd']
const correctChoice = 'Devmynd'
const incorrectChoice = 'Burger Shack'
const answers = {
  'Tandem': false,
  'Burger Shack': false,
  'Extraordinary Humans': false,
  'Devmynd': true
}

test('generateAnswersKey should return an object with the correct and incorrect answers as keys', () => {
  const result = generateAnswersKey(questions[0].correct, questions[0].incorrect);
  expect(Object.keys(result).length === 4).toBe(true);
  expect(Object.keys(result).includes('Devmynd')).toBe(true);
});

test('generateCorrect should return an array', () => {
  const result = generateCorrect()
})