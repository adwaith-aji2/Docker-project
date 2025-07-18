import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Add this line:
import axios from 'axios';
jest.mock('axios', () => ({
  get: jest.fn(), // mock the get method only
}));

const mockData = {
  btc: { currency: 'btc', last: '123456.78' },
  eth: { currency: 'eth', last: '2345.67' }
};

axios.get.mockImplementation(() => Promise.resolve({ data: mockData }));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
