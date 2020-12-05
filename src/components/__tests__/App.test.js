import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('App', () => {
  it('renders without crashing', () => {
    render(<App/>);
  });
  it('should begin loading database on initial load', () => {
    const { getByTestId } = render(<App />); 
    expect(getByTestId('spinner')).toBeInTheDocument();
   });

/* ***** TO FIGURE OUT: *****
    conditionally rendered components???
    How to wait for promise to resolve which sets state and renders a component....
*/

// LEFT OVER TESTS FROM INITIAL BUILD WITH INTERNAL DATABASE:
  // it('should render quiz component after clicking on a quiz category', async () => {
  //   const { getByTestId } = render(<App />);

  //   fireEvent.click(getByTestId('splash-button'));
  //   expect(getByTestId('quiz')).toBeInTheDocument();
  // });
  // it('should render the first question', () => {
  //   const { getByTestId, getByText } = render(<App />);
  //   fireEvent.click(getByTestId('splash-button'));
  //   expect(getByText('1/10')).toBeInTheDocument();
  // });
  // it('should validate the user\'s correct answer and display results', () => {
  //   const { getByTestId, getByText } = render(<App />);
  //   fireEvent.click(getByTestId('splash-button'));
  //   fireEvent.click(getByTestId('correct'));
  //   expect(getByText(/Correct!/)).toBeInTheDocument();  
  // })
  // it('should validate the user\'s incorrect answer and display results', () => {
  //   const { getByTestId, getByText } = render(<App />);
  //   fireEvent.click(getByTestId('splash-button'));
  //   fireEvent.click(getByTestId('incorrect2' || 'incorrect3'));
  //   expect(getByText(/Wrong!/)).toBeInTheDocument();  
  // })
  // it('should go to the next question after correct results', () => {
  //   const { getByTestId } = render(<App />);
  //   fireEvent.click(getByTestId('splash-button'));
  //   fireEvent.click(getByTestId('correct'));
  //   fireEvent.click(getByTestId('nextQ'));
  //   expect(getByTestId('quiz')).toBeInTheDocument();  
  // })
  // it('should go to the next question after incorrect results', () => {
  //   const { getByTestId } = render(<App />);
  //   fireEvent.click(getByTestId('splash-button'));
  //   fireEvent.click(getByTestId('incorrect2' || 'incorrect3'));
  //   fireEvent.click(getByTestId('nextQ'));
  //   expect(getByTestId('quiz')).toBeInTheDocument();
  // })
  // it('should display user\'s score on completing the quiz', () => {
  //   const { getByTestId } = render(<App />);
  //   fireEvent.click(getByTestId('splash-button'));
  //   for (let i = 0; i < 10; i++) {
  //     fireEvent.click(getByTestId('correct'));
  //     fireEvent.click(getByTestId('nextQ'));
  //   }
  //   expect(getByTestId('score')).toBeInTheDocument();
  // })
  // it('should reset quiz when user clicks "play again?"', () => {
  //   const { getByTestId } = render(<App />);
  //   fireEvent.click(getByTestId('splash-button'));
  //   for (let i = 0; i < 10; i++) {
  //     fireEvent.click(getByTestId('correct'));
  //     fireEvent.click(getByTestId('nextQ'));
  //   }
  //   fireEvent.click(getByTestId('play-again'));
  //   expect(getByTestId('quiz')).toBeInTheDocument();
  // })
});

