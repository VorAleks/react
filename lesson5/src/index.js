import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'increase':
      return {
        ...state,
        count: state.count + 1
      }
    case 'decrease':
      return state.count  ? {
        ...state,
        count: state.count - 1
      } : {
        ...state,
        count: state.count = 0
      }
    default:
      return state
  }
}

const store = createStore (reducer, composeWithDevTools);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

