import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

jest.mock('axios');

const mockData = {
  btc: { currency: 'btc', last: '123456.78' },
  eth: { currency: 'eth', last: '2345.67' }
};

axios.get.mockResolvedValue({ data: mockData });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
