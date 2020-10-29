import React from 'react';
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('App', () => {
  it('renders without crashing', () => {
    render(<App/>);
  });

  it('should contain splash page on initial load', () => {
    const { getByTestId } = render(<App />); 
    expect(getByTestId('splash')).toBeInTheDocument()
   });

  it('should render quiz component after clicking on splash page button', async () => {
  const { getByTestId } = render(<App />);
  
  await waitForElement(() => getByTestId('splash')).then(() => {
    fireEvent.click(getByTestId('splash-button'));
  
    expect(getByTestId('quiz')).toBeInTheDocument();
  });
  });
})

