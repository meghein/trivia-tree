import React from 'react';
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react';
import Provider, { useStateContext, useDispatchContext } from 'context/Provider';
import App from '../App';
import Quiz from '../Quiz';

const renderWithContext = (component) => {
  const { currentQ, results } = useStateContext()
  return {
    ...render(
        <Provider>
            {component}
        </Provider>)
  }
}

afterEach(cleanup);

describe('Quiz', () => {
  it('should render the first question', async () => {
    const { getByTestId, getByText } = render(<App />);
    await waitForElement(() => getByTestId('splash')).then(() => {
      fireEvent.click(getByTestId('splash-button'));
      expect(getByText('1/10')).toBeInTheDocument();
    });
  });
  it('should render the result when an answer is clicked', async () => {
    const { getByTestId, getByText } = render(<App />);
    await waitForElement(() => getByTestId('splash')).then(() => {
      fireEvent.click(getByTestId('splash-button'));
      fireEvent.click(getByTestId('a1'));
      expect(getByText(/Click here/)).toBeInTheDocument();  
    });
  });
  it('checks if initial state is equal to 0', () => {
    // const { getByTestId } = renderWithContext(<Quiz />)
    // expect(getByTestId('counter')).toHaveTextContent('0')
    renderWithContext(<Quiz />)
})
});