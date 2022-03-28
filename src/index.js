import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProfileCreation from './ProfileCreation'
import SignInForm from './SignInForm.js'
import reportWebVitals from './reportWebVitals';
import My from './My'

ReactDOM.render(
  <React.StrictMode>
    <My />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
