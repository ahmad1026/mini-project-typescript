import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store';
import {boundRequestTodos} from './redux/action-creators/index'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
boundRequestTodos()
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>
);
