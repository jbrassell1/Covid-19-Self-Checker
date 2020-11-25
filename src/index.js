import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyCnJZlCwC9viSU-_HcQrYConPnABGIscqo",
  authDomain: "covid-19-self-assessment-8d8ed.firebaseapp.com",
  databaseURL: "https://covid-19-self-assessment-8d8ed.firebaseio.com",
  projectId: "covid-19-self-assessment-8d8ed",
  storageBucket: "covid-19-self-assessment-8d8ed.appspot.com",
  messagingSenderId: "389041938755",
  appId: "1:389041938755:web:84e1917dd79b01983dcff6",
  measurementId: "G-910XRMWZ4V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
