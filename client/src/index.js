// react
import React from 'react';
import ReactDOM from 'react-dom';
// react router
import {BrowserRouter} from 'react-router-dom'
// redux
import {Provider} from 'react-redux'
import {store, persistor} from './redux/store'
// redux-persist
import {PersistGate} from 'redux-persist/integration/react'
// styles
import './index.css';
// components
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App/>
          </PersistGate>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


