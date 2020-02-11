import React from 'react';
import ReactDOM from 'react-dom';
import Cognito, { CognitoContext } from './atoms/Congnito';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <CognitoContext.Provider value={new Cognito()}>
    <App />
  </CognitoContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
