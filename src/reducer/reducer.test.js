import reducer, { ACTION } from './reducer';

const state = {
  quiz: [],
  answersKey: {},
  currentQ: 0,
  options: [],
  choice: '',
  results: 'pending',
  score: 0,

}

describe('Application Reducer', () => {
  it('should update state with a provided quiz', () => {
    const reduce = reducer(state, { type: ACTION.SET_QUIZ, payload: ['test quiz'] })
    const result = { ...state, quiz: [ 'test quiz' ] }
    expect(reduce).toEqual(result)
  });
  it('should update state with a provided answer key', () => {
    const reduce = reducer(state, { type: ACTION.ANSWERS_KEY, payload: {test: 'key'} })
    const result = { ...state, answersKey: {test: 'key'} }
    expect(reduce).toEqual(result) 
  });
  it('should update state with a current question', () => {
    const reduce = reducer(state, { type: ACTION.CURRENT_Q, payload: 1 })
    const result = { ...state, currentQ: 1 }
    expect(reduce).toEqual(result)
  });
  it('should update state with provided options and a choice', () => {
    const reduce = reducer(state, { type: ACTION.CHOICE, answers: [1, 2, 3, 4], choice: 'test' })
    const result = { ...state, options: [ 1, 2, 3, 4 ], choice: 'test' }
    expect(reduce).toEqual(result)
  });
  it('should update state with a provided answer choice', () => {
    const reduce = reducer(state, { type: ACTION.RESULTS, payload: 'test' })
    const result = { ...state, results: 'test' }
    expect(reduce).toEqual(result)
  });
  it('should update state score', () => {
    const reduce = reducer(state, { type: ACTION.SCORE, payload: 1 })
    const result = { ...state, score: 1 }
    expect(reduce).toEqual(result)
  });
  it('should reset state to initial', () => {
    const reduce = reducer(state, { type: ACTION.RESET })
    const result = { ...state }
    expect(reduce).toEqual(result)
  });
  it('thows an error with an unsupported type', () => {
    expect(() => reducer({}, { type: null })).toThrowError(
      /Tried to reduce with unsupported action type/i
    );
  });
});