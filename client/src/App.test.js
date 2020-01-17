import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Dark from './components/Toggle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Has the word `Athletes` in it', () => {
  const { getByText } = render(<Dark />);

  getByText(/athletes/i);
});
