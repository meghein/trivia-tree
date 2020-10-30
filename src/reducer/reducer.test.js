import reducer, { ACTION } from './reducer';

const testState = {
  quiz: [],
  answersKey: {},
  currentQ: 0,
  options: [],
  choice: '',
  results: 'pending',
  score: 0,
};

describe('Application Reducer', () => {
  it('should update state with a provided quiz', () => {
    const reduce = reducer(testState, { type: ACTION.SET_QUIZ, payload: ['test quiz'] })
    const result = { ...testState, quiz: [ 'test quiz' ] }
    expect(reduce).toEqual(result)
  });
  it('should update state with a provided answer key', () => {
    const reduce = reducer(testState, { type: ACTION.ANSWERS_KEY, payload: {test: 'key'} })
    const result = { ...testState, answersKey: {test: 'key'} }
    expect(reduce).toEqual(result) 
  });
  it('should update state with a current question', () => {
    const reduce = reducer(testState, { type: ACTION.CURRENT_Q, payload: 1 })
    const result = { ...testState, currentQ: 1 }
    expect(reduce).toEqual(result)
  });
  it('should update state with provided options and a choice', () => {
    const reduce = reducer(testState, { type: ACTION.CHOICE, answers: [1, 2, 3, 4], choice: 'test' })
    const result = { ...testState, options: [ 1, 2, 3, 4 ], choice: 'test' }
    expect(reduce).toEqual(result)
  });
  it('should update state with a provided answer choice', () => {
    const reduce = reducer(testState, { type: ACTION.RESULTS, payload: 'test' })
    const result = { ...testState, results: 'test' }
    expect(reduce).toEqual(result)
  });
  it('should update state score', () => {
    const reduce = reducer(testState, { type: ACTION.SCORE, payload: 1 })
    const result = { ...testState, score: 1 }
    expect(reduce).toEqual(result)
  });
  it('should reset state to initial', () => {
    const reduce = reducer(testState, { type: ACTION.RESET })
    const result = { ...testState }
    expect(reduce).toEqual(result)
  });
  it('thows an error with an unsupported type', () => {
    expect(() => reducer({}, { type: null })).toThrowError(
      /Tried to reduce with unsupported action type/i
    );
  });
});