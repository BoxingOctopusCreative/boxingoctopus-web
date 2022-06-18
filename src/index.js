import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';
import reportWebVitals from './reportWebVitals';
import LogRocket from 'logrocket';

LogRocket.init('6mr8rr/boxing-octopus-creative');

ReactGA.initialize(
  process.env.REACT_APP_GA_PROPERTY_ID,{
    gaOptions: {
      cookieFlags: 'SameSite=None; Secure'
    }
  });
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
