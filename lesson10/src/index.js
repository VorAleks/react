import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { persist, store} from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <PersistGate persistor={persist}> */}
        <React.StrictMode>
          <App  />
        </React.StrictMode>
      {/* </PersistGate> */}
    </Provider>   
  </BrowserRouter>
);




